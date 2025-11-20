export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": env.POSTMARK_SERVER_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        From: env.EMAIL_FROM,
        To: env.EMAIL_TO,
        ReplyTo: email,
        Subject: `New message from ${name}`,
        TextBody: message,
        MessageStream: "outbound",
      }),
    });
  
    if (!res.ok) {
      return new Response(JSON.stringify({ success: false, error: "Email failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  