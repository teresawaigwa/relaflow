export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", {
          status: 405,
        });
      }

      try {
        const formData = await request.formData();

        const name = formData.get("name")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const organization = formData.get("organization")?.toString().trim();
        const help = formData.get("help")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        if (!name || !email || !message) {
          return new Response("Please complete the required fields.", {
            status: 400,
          });
        }

        const resendResponse = await fetch(
          "https://api.resend.com/emails",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Relaflow Contact <hello@relaflow.com>",
              to: ["hello@relaflow.com"],
              reply_to: email,
              subject: `New Relaflow enquiry from ${name}`,
              text: `
Name: ${name}
Work email: ${email}
Organization: ${organization || "Not provided"}
Area: ${help || "Not specified"}

Message:
${message}
              `.trim(),
            }),
          }
        );

        if (!resendResponse.ok) {
          const error = await resendResponse.text();
          console.error("Resend error:", error);

          return new Response(
            "We couldn't send your enquiry. Please email hello@relaflow.com directly.",
            { status: 500 }
          );
        }

        return Response.redirect(
          `${url.origin}/contact?sent=1`,
          303
        );
      } catch (error) {
        console.error("Contact form error:", error);

        return new Response(
          "Something went wrong. Please email hello@relaflow.com directly.",
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  },
};