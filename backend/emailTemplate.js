// =========================
// emailTemplate.js
// =========================

// -------------------------
// 1️⃣ Admin Email (to you)
// -------------------------
export const contactEmailTemplate = ({ name, email, message }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Message</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #0f0f0f;
      font-family: "Inter", Arial, sans-serif;
      color: #ffffff;
    }

    .container {
      max-width: 650px;
      margin: 30px auto;
      background: #121212;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 4px 30px rgba(0,0,0,0.4);
    }

    .header {
      background: #f1f1f1ff;
      padding: 32px;
      text-align: center;
      color: white;
    }

    .logo {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .logo span { color: #050505ff; }
    .logo b { color: #dc2626; }

    .content { padding: 30px; }

    .label {
      font-size: 14px;
      opacity: 0.8;
      margin-bottom: 6px;
      font-weight: 500;
      color: #cccccc;
    }

    .value {
      font-size: 18px;
      margin-bottom: 20px;
      color: #ffffff;
    }

    .message-box {
      background: #1c1c1c;
      padding: 18px;
      border-radius: 12px;
      border-left: 4px solid #dc2626;
      line-height: 1.6;
      font-size: 16px;
      color: #e5e5e5;
    }

    .footer {
      text-align: center;
      font-size: 13px;
      padding: 20px;
      background: #181818;
      color: #aaa;
    }

  </style>
</head>

<body>
  <div class="container">

    <div class="header">
      <div class="logo"><span>M</span><b>Smith</b></div>
      <h2 style="margin: 10px 0 0; font-weight: 600; color: #0a0a0aff;">New Portfolio Message</h2>
    </div>

    <div class="content">
      <div class="label">Sender Name</div>
      <div class="value">${name}</div>

      <div class="label">Sender Email</div>
      <div class="value">${email}</div>

      <div class="label">Message</div>
      <div class="message-box">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>

    <div class="footer">
      Email sent automatically from your portfolio  
      <br/>© ${new Date().getFullYear()} Mogamat Smith — All rights reserved.
    </div>

  </div>
</body>
</html>
`;

// -------------------------
// 2️⃣ Auto-Reply Email (to user)
// -------------------------
export const autoReplyTemplate = ({ name }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Thank You For Reaching Out</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #0f0f0f;
      font-family: "Inter", Arial, sans-serif;
      color: #ffffff;
    }

    .container {
      max-width: 650px;
      margin: 30px auto;
      background: #121212;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 4px 30px rgba(0,0,0,0.4);
    }

    .header {
      background: #f1f1f1ff;
      padding: 32px;
      text-align: center;
      color: white;
    }

    .logo {
      font-size: 34px;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .logo span { color: #050505ff; }
    .logo b { color: #dc2626; }

    .content {
      padding: 30px;
      font-size: 16px;
      line-height: 1.7;
      color: #e5e5e5;
    }

    .footer {
      text-align: center;
      font-size: 13px;
      padding: 20px;
      background: #181818;
      color: #aaa;
    }
  </style>
</head>

<body>
  <div class="container">

    <div class="header">
      <div class="logo"><span>M</span><b>Smith</b></div>
      <h2 style="margin: 10px 0 0; color: #0a0a0aff;">Thank You For Your Message</h2>
    </div>

    <div class="content">
      Hi ${name},<br><br>

      Thank you for reaching out via my portfolio.  
      I’ve received your message and will get back to you shortly.
      <br><br>

      If your enquiry is urgent, feel free to reply directly to this email.
      <br><br>

      Kind regards,<br>
      <strong>Mogamat Smith</strong><br>
      Full-Stack Web Developer
    </div>

    <div class="footer">
      This is an automated confirmation email.
    </div>

  </div>
</body>
</html>
`;
