export async function onRequestPost({ request, env }) {
  const contentType = request.headers.get("content-type") || "";
  let name, email, phone, preferredDate, message;

  if (contentType.includes("application/json")) {
    const body = await request.json();
    ({ name, email, phone, preferredDate, message } = body);
  } else if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    name = formData.get("name");
    email = formData.get("email");
    phone = formData.get("phone");
    preferredDate = formData.get("preferredDate");
    message = formData.get("message");
  } else {
    return jsonResponse(
      { success: false, error: "Unsupported or missing Content-Type" },
      400
    );
  }

  if (!name || !email || !phone || !preferredDate) {
    return jsonResponse(
      { success: false, error: "Missing required fields." },
      400
    );
  }

  const emailText = formatTextEmail({
    name,
    email,
    phone,
    preferredDate,
    message,
  });

  const emailHtml = formatHtmlEmail({
    name,
    email,
    phone,
    preferredDate,
    message,
  });

  const mailgunDomain = env.MAILGUN_DOMAIN;
  const mailgunKey = env.MAILGUN_API_KEY;

  if (!mailgunDomain || !mailgunKey) {
    return jsonResponse(
      { success: false, error: "Mailgun configuration missing on server." },
      500
    );
  }

  const fromAddress =
    env.MAIL_FROM || `Fine Art Real Estate <mail@${mailgunDomain}>`;
  const toAddress = env.MAIL_RECIPIENT || env.MAIL_FROM || fromAddress;

  const formData = new URLSearchParams({
    from: fromAddress,
    to: toAddress,
    subject: `New booking request from ${name}`,
    text: emailText,
    html: emailHtml,
    "h:Reply-To": email,
  });

  const res = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`api:${mailgunKey}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
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

function formatTextEmail({ name, email, phone, preferredDate, message }) {
  return [
    `New booking request submitted via modal form:`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred Date & Time: ${preferredDate}`,
    `Message: ${message || "—"}`,
  ].join("\n");
}

function formatHtmlEmail({ name, email, phone, preferredDate, message }) {
  return `
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Preferred Date & Time:</strong> ${escapeHtml(preferredDate)}</p>
    <p><strong>Message:</strong> ${escapeHtml(message || "—")
      .replace(/\n/g, "<br>")}</p>
  `;
}
  