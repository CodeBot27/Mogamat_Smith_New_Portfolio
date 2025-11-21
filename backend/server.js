import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import { contactEmailTemplate, autoReplyTemplate } from "./emailTemplate.js";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1Admin Email
    await sgMail.send({
      to: process.env.EMAIL_FROM,
      from: process.env.EMAIL_FROM,
      subject: `📬 New message from ${name}`,
      html: contactEmailTemplate({ name, email, message }),
    });

    //Auto-Reply Email to user
    await sgMail.send({
      to: email,
      from: process.env.EMAIL_FROM,
      subject: "Thank You For Your Message",
      html: autoReplyTemplate({ name }),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(process.env.PORT || 4000, () =>
  console.log("Backend started on port", process.env.PORT || 4000)
);
