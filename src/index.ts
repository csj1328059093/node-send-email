import nodemailer from 'nodemailer'
import types from "./service.ts";

const fun = async (params, callback) => {
    const {type = 'qq', name = '', smtp = '', from = '', ...other} = params
    let nodeMail = nodemailer.createTransport({
        ...types[type],
        auth: {
            user: from,
            pass: smtp
        }
    });
    const mail = {
        from: `"${name}"<${from}>`,
        ...other
    };
    await nodeMail.sendMail(mail, (err, info) => {
        callback(!err, info)
    })
}

export default fun
