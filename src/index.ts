import nodemailer from 'nodemailer'

const types = {
    "qq": {
        "domains": ["qq.com"],
        "host": "smtp.qq.com",
        "port": 465,
        "secure": true
    },
    "126": {
        "host": "smtp.126.com",
        "port": 465,
        "secure": true
    },
    "163": {
        "host": "smtp.163.com",
        "port": 465,
        "secure": true
    },
    "gmail": {
        "aliases": ["Google Mail"],
        "domains": ["gmail.com", "googlemail.com"],
        "host": "smtp.gmail.com",
        "port": 465,
        "secure": true
    },
    "1und1": {
        "host": "smtp.1und1.de",
        "port": 465,
        "secure": true,
        "authMethod": "LOGIN"
    },
    "aol": {
        "domains": ["aol.com"],
        "host": "smtp.aol.com",
        "port": 587
    },
    "debugmail": {
        "host": "debugmail.io",
        "port": 25
    },
    "dynect": {
        "aliases": ["Dynect"],
        "host": "smtp.dynect.net",
        "port": 25
    },
    "ethereal": {
        "aliases": ["ethereal.email"],
        "host": "smtp.ethereal.email",
        "port": 587
    },
    "fastmail": {
        "domains": ["fastmail.fm"],
        "host": "smtp.fastmail.com",
        "port": 465,
        "secure": true
    },
    "gandi": {
        "aliases": ["Gandi", "Gandi Mail"],
        "host": "mail.gandi.net",
        "port": 587
    },
    "secureserver": {
        "host": "smtpout.secureserver.net",
        "port": 25
    },
    "asia.secureserver": {
        "host": "smtp.asia.secureserver.net",
        "port": 25
    },
    "europe.secureserver": {
        "host": "smtp.europe.secureserver.net",
        "port": 25
    },
    "hot": {
        "host": "mail.hot.ee"
    },
    "live": {
        "aliases": ["Outlook", "Outlook.com", "Hotmail.com"],
        "domains": ["hotmail.com", "outlook.com"],
        "host": "smtp.live.com",
        "port": 587
    },
    "mail.me": {
        "aliases": ["Me", "Mac"],
        "domains": ["me.com", "mac.com"],
        "host": "smtp.mail.me.com",
        "port": 587
    },

    "mail.ee": {
        "host": "smtp.mail.ee"
    },

    "mail.ru": {
        "host": "smtp.mail.ru",
        "port": 465,
        "secure": true
    },

    "Maildev": {
        "port": 1025,
        "ignoreTLS": true
    },

    "mailgun": {
        "host": "smtp.mailgun.org",
        "port": 465,
        "secure": true
    },

    "mailjet": {
        "host": "in.mailjet.com",
        "port": 587
    },

    "mailosaur": {
        "host": "mailosaur.io",
        "port": 25
    },

    "mailtrap": {
        "host": "smtp.mailtrap.io",
        "port": 2525
    },

    "mandrillapp": {
        "host": "smtp.mandrillapp.com",
        "port": 587
    },

    "naver": {
        "host": "smtp.naver.com",
        "port": 587
    },

    "one": {
        "host": "send.one.com",
        "port": 465,
        "secure": true
    },

    "openmailbox": {
        "aliases": ["OMB", "openmailbox.org"],
        "host": "smtp.openmailbox.org",
        "port": 465,
        "secure": true
    },

    "office365": {
        "host": "smtp.office365.com",
        "port": 587,
        "secure": false
    },

    "ohmysmtp": {
        "host": "smtp.ohmysmtp.com",
        "port": 587,
        "secure": false
    },

    "postmarkapp": {
        "aliases": ["PostmarkApp"],
        "host": "smtp.postmarkapp.com",
        "port": 2525
    },

    "mxhichina": {
        "host": "smtp.mxhichina.com",
        "port": "465",
        "secure": true
    },

    "exmail.qq": {
        "aliases": ["QQ Enterprise"],
        "domains": ["exmail.qq.com"],
        "host": "smtp.exmail.qq.com",
        "port": 465,
        "secure": true
    },

    "sohu": {
        "host": "smtpcloud.sohu.com",
        "port": 25
    },

    "sendgrid": {
        "host": "smtp.sendgrid.net",
        "port": 587
    },

    "sendinblue": {
        "host": "smtp-relay.sendinblue.com",
        "port": 587
    },

    "pulse": {
        "host": "smtp-pulse.com",
        "port": 465,
        "secure": true
    },
    "SES": {
        "host": "email-smtp.us-east-1.amazonaws.com",
        "port": 465,
        "secure": true
    },

    "SES-US-EAST-1": {
        "host": "email-smtp.us-east-1.amazonaws.com",
        "port": 465,
        "secure": true
    },
    "SES-US-WEST-2": {
        "host": "email-smtp.us-west-2.amazonaws.com",
        "port": 465,
        "secure": true
    },
    "SES-EU-WEST-1": {
        "host": "email-smtp.eu-west-1.amazonaws.com",
        "port": 465,
        "secure": true
    },
    "sparkpost": {
        "aliases": ["SparkPost", "SparkPost Mail"],
        "domains": ["sparkpost.com"],
        "host": "smtp.sparkpostmail.com",
        "port": 587,
        "secure": false
    },
    "tipimail": {
        "host": "smtp.tipimail.com",
        "port": 587
    },
    "yahoo": {
        "domains": ["yahoo.com"],
        "host": "smtp.mail.yahoo.com",
        "port": 465,
        "secure": true
    },
    "yandex": {
        "domains": ["yandex.ru"],
        "host": "smtp.yandex.ru",
        "port": 465,
        "secure": true
    },
    "zoho": {
        "host": "smtp.zoho.com",
        "port": 465,
        "secure": true,
        "authMethod": "LOGIN"
    }
}

type Type = keyof typeof types

interface Params {
    // 邮箱类型
    type: Type,
    // 发件人昵称
    name: string,
    // smtp码
    smtp: string,
    // 发件箱
    from: string,
    // 邮件标题
    subject: string,
    // 收件箱
    to: string,
    // 邮件内容，HTML格式
    html: string
}

type Callback = (result: any, info: any) => {}

// @ts-ignore
export const sendEmail = async (params: Params, callback: Callback) => {
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
    await nodeMail.sendMail(mail, (err: any, info: any) => {
        callback(!err, info)
    })
}

const nodeSendEmail = {sendEmail}
export default nodeSendEmail

