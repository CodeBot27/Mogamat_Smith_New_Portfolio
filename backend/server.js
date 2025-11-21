import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import { contactEmailTemplate, autoReplyTemplate } from "./emailTemplate.js";

dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
  console.error("❌ Missing SENDGRID_API_KEY in environment!");
}

if (!process.env.EMAIL_FROM) {
  console.error("❌ Missing EMAIL_FROM in environment!");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    // Send email to YOU (admin)
    await sgMail.send({
      to: process.env.EMAIL_FROM,
      from: process.env.EMAIL_FROM,
      subject: `📬 New message from ${name}`,
      html: contactEmailTemplate({ name, email, message }),
    });

    // Auto-reply to USER
    await sgMail.send({
      to: email,
      from: process.env.EMAIL_FROM,
      subject: "📨 Thank You For Your Message",
      html: autoReplyTemplate({ name }),
    });

    console.log("Emails sent successfully ✔️");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ SendGrid error:", error.response?.body || error);
    res.status(500).json({
      success: false,
      error: error.response?.body || "SendGrid failed",
    });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
