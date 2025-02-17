// 导入 nodemailer 模块
import * as nodemailer from 'nodemailer';
// 导入 service.js 中的类型
import types from "./service.js";
// 导入 SMTPTransport 类型
import SMTPTransport from "nodemailer/lib/smtp-transport";

// 定义 TypeKeys 类型，它是 types 对象的键的联合类型
type TypeKeys = keyof typeof types;

// 定义发送邮件所需参数的接口
interface Params {
    // 邮箱类型，@qq.com就传qq，@163.com就是传163，不传的话默认为qq
    type?: TypeKeys;
    // 发件人
    name: string;
    // 发件箱
    smtp: string;
    // 发件箱smtp,邮箱—设置–账户–POP3/SMTP服务—开启—获取stmp授权码
    from: string;
    // 发送的邮件主题
    subject: string;
    // 收件箱
    to: string;
    // 邮件内容，HTML格式
    html: string;
}

// 定义回调函数的类型，回调函数接收一个布尔值表示是否有错误
type Callback = (result: boolean) => void;

// 定义 sendEmail 函数
export const sendEmail = async (params: Params, callback?: Callback): Promise<SMTPTransport.SentMessageInfo> => {
    // 解构赋值并设置默认值
    const {type = 'qq' as TypeKeys, name = '', smtp = '', from = '', ...other} = params;

    // 创建 nodemailer 传输器
    const nodeMail = nodemailer.createTransport({
        ...types[type],
        auth: {
            user: from,
            pass: smtp
        }
    });

    // 构建邮件选项
    const mail: nodemailer.SendMailOptions = {
        from: `"${name}"<${from}>`,
        ...other
    };

    return new Promise<SMTPTransport.SentMessageInfo>((resolve, reject) => {
        // 发送邮件
        nodeMail.sendMail(mail, (err: Error | null, info: SMTPTransport.SentMessageInfo) => {
            // 如果提供了回调函数，则调用它
            if (callback) {
                callback(!err);
            }
            // 根据是否有错误来解决或拒绝 Promise
            if (!err) {
                resolve(info);
            } else {
                reject(err);
            }
        });
    });
};

// 定义包含 sendEmail 函数的对象
const nodeSendEmail = {sendEmail};

// 导出默认对象
export default nodeSendEmail;
