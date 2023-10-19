import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express();
app.use(express.json());
app.use(cors())

dotenv.config();
const port = process.env.PORT;
const email_host: string = process.env.EMAIL_HOST ? process.env.EMAIL_HOST : ''
const email_login: string = process.env.EMAIL_LOGIN ? process.env.EMAIL_LOGIN : ''
const email_pass: string = process.env.EMAIL_PASS ? process.env.EMAIL_PASS : ''
const email_port: string = process.env.EMAIL_PORT ? process.env.EMAIL_PORT : ''

const transporter = nodemailer.createTransport({
    host: email_host,
    port: parseInt(email_port),
    secure: true,
    auth: {
        user: email_login,
        pass: email_pass,
    },
});

const sendEmail = async (
    type: string,
    name: string,
    email: string
) => {
    const info = await transporter.sendMail({
        from: 'no-reply@mail.evoai.tech', // sender address
        to: "support@@mail.evoai.tech", // list of receivers
        subject: "EVO | Contact Us", // Subject line
        text: "EVO | Contact Us", // plain text body
        html: `<b>Type:</b> ${type} <br/>
               <b>Name:</b> ${name} <br/>
               <b>Email:</b> ${email} <br/>
                 `, // html body
    });

    console.log("Message sent: %s", info.messageId)
}


app.post('/api/email-form/', (req, res) => {
    sendEmail(req.body.type, req.body.name, req.body.email)
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});