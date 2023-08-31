import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class MailerService {
  async sendMail(to: string, subject: string, body: string) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
      });
      const mailOptions = {
        from: 'Rally Fund',
        to,
        subject,
        text: body,
      };
      await transporter.sendMail(mailOptions);
    } catch (error) {
      return error;
    }
  }
}
