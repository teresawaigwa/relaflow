export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const organization = formData.get("organization")?.toString().trim();
    const help = formData.get("help")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      return new Response("Please complete all required fields.", {
        status: 400,
      });
    }

    const apiKey = context.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return new Response("The contact form is not configured correctly.", {
        status: 500,
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Relaflow Website <contact@send.relaflow.com>",
        to: ["hello@relaflow.com"],
        reply_to: email,
        subject: `New Relaflow enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organization: ${organization || "Not provided"}`,
          `What can we help with: ${help || "Not specified"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend error:", errorText);

      return new Response(
        "We could not send your enquiry. Please try again.",
        {
          status: 500,
        }
      );
    }

    return new Response(
      "Thank you. Your enquiry has been sent successfully.",
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(
      "Something went wrong. Please try again.",
      {
        status: 500,
      }
    );
  }
}