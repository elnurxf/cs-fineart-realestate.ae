export async function onRequestPost({ request, env }) {
    const contentType = request.headers.get("content-type") || "";
    let name, email, message;
  
    if (contentType.includes("application/json")) {
      // JSON body
      const body = await request.json();
      name = body.name;
      email = body.email;
      message = body.message;
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      // HTML form submit
      const formData = await request.formData();
      name = formData.get("name");
      email = formData.get("email");
      message = formData.get("message");
    } else {
      // No / bad content-type → return a clear error
      return jsonResponse(
        { success: false, error: "Unsupported or missing Content-Type" },
        400
      );
    }
  
    if (!name || !email || !message) {
      return jsonResponse(
        { success: false, error: "All fields are required." },
        400
      );
    }
  
    // --- Postmark call ---
    const postmarkToken = env.POSTMARK_SERVER_TOKEN;
    const toAddress = env.EMAIL_TO;
    const fromAddress = env.EMAIL_FROM;
  
    if (!postmarkToken || !toAddress || !fromAddress) {
      return jsonResponse(
        { success: false, error: "Server config error." },
        500
      );
    }
  
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": postmarkToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        From: fromAddress,
        To: toAddress,
        ReplyTo: email,
        Subject: `New contact form message from ${name}`,
        TextBody: `From: ${name} <${email}>\n\n${message}`,
        HtmlBody: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${escapeHtml(
          message
        ).replace(/\n/g, "<br>")}</p>`,
        MessageStream: "outbound",
      }),
    });
  
    if (!res.ok) {
      const body = await res.text();
      return jsonResponse(
        { success: false, error: "Failed to send email", providerBody: body },
        502
      );
    }
  
    return jsonResponse({ success: true }, 200);
  }
  
  function jsonResponse(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  function escapeHtml(str = "") {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  