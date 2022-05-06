import  nodemailer  from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1b4a7fdb435955",
    pass: "6e37688d81c158"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: SendMailData){
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'André Silva <andreoew@hotmai.com',
    subject,
    html:body,
  });
  };
  
}