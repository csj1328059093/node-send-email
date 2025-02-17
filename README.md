# node-send-email.js
[![NPM Version](http://img.shields.io/npm/v/node-send-email.svg?style=flat)](https://www.npmjs.org/package/node-send-email)
[![NPM Downloads](https://img.shields.io/npm/dm/node-send-email.svg?style=flat)](https://npmcharts.com/compare/node-send-email?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=node-send-email)](https://packagephobia.now.sh/result?p=node-send-email)

# English
## Introduce
This is a dependency package based on nodemailer for nodejs to send mail, which combines the required parameters and is more convenient to use.

## Use
Two parameters:
- **parameter object**, params, which defines some sending configurations.
- **callback function**, with the result value of Boolean type, to determine whether the transmission is successful.
```javascript
//...
const sendMail = require('node-send-email')
//...
app.post('/api/email', async (req, res) => {
    //...
    const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, '0') //Generate random verification code
    // Parameters required for sending mail
    const params = {
        // Email type, @qq.com will send qq, @163.com will send 163, otherwise, it will be qq by default.
        type:'qq',
        // addresser
        name: 'moon',
        // outbox
        from: 'xxxxx@qq.com',
        // Outbox smtp, mailbox-Settings-Account -POP3/SMTP service-Open-Get stmp authorization code
        smtp: 'xxxxxxxxx',
        // Send the subject of the message
        subject: 'verification code',
        // Inbox
        to: 'xxxxx@qq.com',
        // Mail content, HTML format
        html: `
            <p>howdy！</p>
            <p>Your verification code is：<strong style="color:orangered;">${code}</strong></p>
            <p>If you didn't do it yourself, please ignore this email.</p>
        ` 
    };
    
    await sendMail(params, (result) => {
        if (result) {
            res.send({code: 1, msg: 'Sending verification code succeeded'})
        } else {
            res.send({code: 0, msg: 'Failed to send verification code, please try again later.'})
        }
    })
});
```

# 中文

## 介绍
这是一个基于nodemailer用于nodejs发送邮件的依赖包，将需要参数合并到了一起，使用更便捷。

## 使用
 两个入参：
 - 一个**参数对象**，params，定义一些发送配置。
 - 一个**回调函数**，result值为Boolean类型，判断是否发送成功。
```javascript
//...
const sendMail = require('node-send-email')
//...
app.post('/api/email', async (req, res) => {
    //...
    const code = String(Math.floor(Math.random() * 1000000)).padEnd(6, '0') //生成随机验证码
    //发送邮件需要的入参
    const params = {
        // 邮箱类型，@qq.com就传qq，@163.com就是传163，不传的话默认为qq
        type:'qq',
        // 发件人
        name: '月亮',
        // 发件箱
        from: 'xxxxx@qq.com',
        // 发件箱smtp,邮箱—设置–账户–POP3/SMTP服务—开启—获取stmp授权码 
        smtp: 'xxxxxxxxx',
        // 发送的邮件主题
        subject: '验证码',
        // 收件箱
        to: 'xxxxx@qq.com',
        // 邮件内容，HTML格式
        html: `
            <p>您好！</p>
            <p>您的验证码是：<strong style="color:orangered;">${code}</strong></p>
            <p>如果不是您本人操作，请无视此邮件</p>
        ` 
    };
    
    await sendMail(params, (result) => {
        if (result) {
            res.send({code: 1, msg: '发送验证码成功'})
        } else {
            res.send({code: 0, msg: '发送验证码失败，请稍后重试'})
        }
    })
});
```

# 3.0.0

添加了对esm和Promise链式回调的支持，可以不再使用回调函数（仍然支持使用，不影响旧版本）。

```javascript
import { sendEmail } from 'node-send-email'
params = { ... }
sendEmail(params).then((info) => {
  // 成功返回的一些相关信息
  console.log(info)
}).catch((err) => {
  // 错误返回的报错信息
  console.log(err)
})
```
