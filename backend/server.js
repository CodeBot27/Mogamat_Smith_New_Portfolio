import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import { contactEmailTemplate, autoReplyTemplate } from "./emailTemplate.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Email endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // 1️⃣ Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 New message from ${name}`,
      html: contactEmailTemplate({ name, email, message }),
    });

    // 2️⃣ Auto-reply to USER
    await transporter.sendMail({
      from: `"Mogamat Smith" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: autoReplyTemplate({ name }),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(4000, () =>
  console.log("Backend started on http://localhost:4000")
);
