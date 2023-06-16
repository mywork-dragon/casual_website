import nodemailer from "nodemailer";

export default async function submitForm(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, company, howDidYouHearAboutUs, message } =
    req.body;

  try {
    const transporter = nodemailer.createTransport({
      // Configure the email transport options here
      // See nodemailer documentation for details
    });

    // Compose the email message
    const mailOptions = {
      from: email,
      to: "hello@causallabs.io",
      subject: "Contact Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Company: ${company}
        How did you hear about us?: ${howDidYouHearAboutUs}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    return res
      .status(500)
      .json({ message: "An error occurred while sending the email" });
  }
}
