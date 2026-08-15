import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Missing API key" });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["babdoulrazzai@gmail.com"],
        reply_to: email,
        subject: `[Portfolio] Message de ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
            <h2 style="color:#00D4AA;margin:0 0 16px">Nouveau message depuis le portfolio</h2>
            <p style="margin:0 0 8px"><strong>Nom :</strong> ${name}</p>
            <p style="margin:0 0 8px"><strong>Email :</strong> ${email}</p>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
            <p style="margin:0 0 8px"><strong>Message :</strong></p>
            <p style="white-space:pre-wrap;color:#374151;margin:0">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Resend error:", err);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
