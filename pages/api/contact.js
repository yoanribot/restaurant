import nodemailer from 'nodemailer';

const transportSendInBlue = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    Port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SENDINBLUE_USER,
      pass: process.env.NEXT_PUBLIC_SENDINBLUE_PASSWORD,
    },
  });


export default function handler(req, res) {
    if (req.method === "POST") {
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const phoneNumber = req.body.phone;
        const email = req.body.email;
        const content = req.body.formContent;
        const mail = {
        from: email,
        to: "lestoquesdelapizza.27@gmail.com, anais.ducher@gmail.com ",
        subject: "demande de contact",
        html: `<p>Nom: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>téléphone: ${phoneNumber}</p>
                <p>Message: ${content}</p>`,
        };

        transportSendInBlue.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.json({ status: "ERROR", error });
        } else {
            res.json({ status: "Message Sent" });
        }
        });
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}