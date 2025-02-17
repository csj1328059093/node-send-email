"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
// 导入 nodemailer 模块
const nodemailer = __importStar(require("nodemailer"));
// 导入 service.js 中的类型
const service_js_1 = __importDefault(require("./service.js"));
// 定义 sendEmail 函数
const sendEmail = (params, callback) => __awaiter(void 0, void 0, void 0, function* () {
    // 解构赋值并设置默认值
    const { type = 'qq', name = '', smtp = '', from = '' } = params, other = __rest(params, ["type", "name", "smtp", "from"]);
    // 创建 nodemailer 传输器
    const nodeMail = nodemailer.createTransport(Object.assign(Object.assign({}, service_js_1.default[type]), { auth: {
            user: from,
            pass: smtp
        } }));
    // 构建邮件选项
    const mail = Object.assign({ from: `"${name}"<${from}>` }, other);
    return new Promise((resolve, reject) => {
        // 发送邮件
        nodeMail.sendMail(mail, (err, info) => {
            // 如果提供了回调函数，则调用它
            if (callback) {
                callback(!err);
            }
            // 根据是否有错误来解决或拒绝 Promise
            if (!err) {
                resolve(info);
            }
            else {
                reject(err);
            }
        });
    });
});
exports.sendEmail = sendEmail;
// 定义包含 sendEmail 函数的对象
const nodeSendEmail = { sendEmail: exports.sendEmail };
// 导出默认对象
exports.default = nodeSendEmail;
