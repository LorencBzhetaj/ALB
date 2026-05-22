import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, city, message, contact } = body;

    // Basic validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    // Sanitize inputs (strip HTML tags)
    const sanitize = (str: string) =>
      String(str).replace(/<[^>]*>/g, "").trim().slice(0, 1000);

    const data = {
      name: sanitize(name),
      phone: sanitize(phone),
      email: sanitize(email || ""),
      service: sanitize(service),
      city: sanitize(city || ""),
      message: sanitize(message || ""),
      contact: sanitize(contact || "phone"),
    };

    // TODO: Integrate your email provider here.
    // Example with Resend (https://resend.com):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@albremodeling.com",
    //   to: process.env.CONTACT_EMAIL_TO!,
    //   subject: `New Estimate Request from ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Phone: ${data.phone}
    //     Email: ${data.email}
    //     Service: ${data.service}
    //     City: ${data.city}
    //     Preferred Contact: ${data.contact}
    //     Message: ${data.message}
    //   `,
    // });

    console.log("New contact form submission:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
