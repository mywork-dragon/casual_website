import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async function submitForm(req, res) {
  const {
    EMAIL_TO,
    EMAIL_FROM,
    EMAIL_SUBJECT,
    SMTP_SERVICE,
    SMTP_AUTH_USER,
    SMTP_AUTH_PASS,
  } = process.env;
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  if (
    !EMAIL_TO ||
    !EMAIL_FROM ||
    !EMAIL_SUBJECT ||
    !SMTP_SERVICE ||
    !SMTP_AUTH_USER ||
    !SMTP_AUTH_PASS
  ) {
    return res.status(500).json({ message: "Missing configuration" });
  }

  const { firstName, lastName, email, company, howDidYouHearAboutUs, message } =
    req.body;

  try {
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: SMTP_SERVICE,
        auth: {
          user: SMTP_AUTH_USER,
          pass: SMTP_AUTH_PASS,
        },
      })
    );

    const mailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: EMAIL_SUBJECT.split("_").join(" ") || "Contact Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Company: ${company}
        How did you hear about us?: ${howDidYouHearAboutUs}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    return res
      .status(500)
      .json({ message: "An error occurred while sending the email" });
  }
}
