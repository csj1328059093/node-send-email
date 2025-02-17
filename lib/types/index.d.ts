import types from "./service.js";
import SMTPTransport from "nodemailer/lib/smtp-transport";
type TypeKeys = keyof typeof types;
interface Params {
    type?: TypeKeys;
    name: string;
    smtp: string;
    from: string;
    subject: string;
    to: string;
    html: string;
}
type Callback = (result: boolean) => void;
export declare const sendEmail: (params: Params, callback?: Callback) => Promise<SMTPTransport.SentMessageInfo>;
declare const nodeSendEmail: {
    sendEmail: (params: Params, callback?: Callback) => Promise<SMTPTransport.SentMessageInfo>;
};
export default nodeSendEmail;
