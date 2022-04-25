declare const types: {
    qq: {
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    "126": {
        host: string;
        port: number;
        secure: boolean;
    };
    "163": {
        host: string;
        port: number;
        secure: boolean;
    };
    "1und1": {
        host: string;
        port: number;
        secure: boolean;
        authMethod: string;
    };
    aol: {
        domains: string[];
        host: string;
        port: number;
    };
    debugmail: {
        host: string;
        port: number;
    };
    dynect: {
        aliases: string[];
        host: string;
        port: number;
    };
    ethereal: {
        aliases: string[];
        host: string;
        port: number;
    };
    fastmail: {
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    gandi: {
        aliases: string[];
        host: string;
        port: number;
    };
    gmail: {
        aliases: string[];
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    secureserver: {
        host: string;
        port: number;
    };
    "asia.secureserver": {
        host: string;
        port: number;
    };
    "europe.secureserver": {
        host: string;
        port: number;
    };
    hot: {
        host: string;
    };
    live: {
        aliases: string[];
        domains: string[];
        host: string;
        port: number;
    };
    "mail.me": {
        aliases: string[];
        domains: string[];
        host: string;
        port: number;
    };
    "mail.ee": {
        host: string;
    };
    "mail.ru": {
        host: string;
        port: number;
        secure: boolean;
    };
    Maildev: {
        port: number;
        ignoreTLS: boolean;
    };
    mailgun: {
        host: string;
        port: number;
        secure: boolean;
    };
    mailjet: {
        host: string;
        port: number;
    };
    mailosaur: {
        host: string;
        port: number;
    };
    mailtrap: {
        host: string;
        port: number;
    };
    mandrillapp: {
        host: string;
        port: number;
    };
    naver: {
        host: string;
        port: number;
    };
    one: {
        host: string;
        port: number;
        secure: boolean;
    };
    openmailbox: {
        aliases: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    office365: {
        host: string;
        port: number;
        secure: boolean;
    };
    ohmysmtp: {
        host: string;
        port: number;
        secure: boolean;
    };
    postmarkapp: {
        aliases: string[];
        host: string;
        port: number;
    };
    mxhichina: {
        host: string;
        port: string;
        secure: boolean;
    };
    "exmail.qq": {
        aliases: string[];
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    sohu: {
        host: string;
        port: number;
    };
    sendgrid: {
        host: string;
        port: number;
    };
    sendinblue: {
        host: string;
        port: number;
    };
    pulse: {
        host: string;
        port: number;
        secure: boolean;
    };
    SES: {
        host: string;
        port: number;
        secure: boolean;
    };
    "SES-US-EAST-1": {
        host: string;
        port: number;
        secure: boolean;
    };
    "SES-US-WEST-2": {
        host: string;
        port: number;
        secure: boolean;
    };
    "SES-EU-WEST-1": {
        host: string;
        port: number;
        secure: boolean;
    };
    sparkpost: {
        aliases: string[];
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    tipimail: {
        host: string;
        port: number;
    };
    yahoo: {
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    yandex: {
        domains: string[];
        host: string;
        port: number;
        secure: boolean;
    };
    zoho: {
        host: string;
        port: number;
        secure: boolean;
        authMethod: string;
    };
};
declare type Type = keyof typeof types;
interface Params {
    type: Type;
    name: string;
    smtp: string;
    from: string;
    subject: string;
    to: string;
    html: string;
}
declare type Callback = (result: any, info: any) => {};
export declare const sendEmail: (params: Params, callback: Callback) => Promise<void>;
declare const nodeSendEmail: {
    sendEmail: (params: Params, callback: Callback) => Promise<void>;
};
export default nodeSendEmail;
//# sourceMappingURL=index.d.ts.map