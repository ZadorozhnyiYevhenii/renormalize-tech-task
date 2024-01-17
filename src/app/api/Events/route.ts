import Event from "../../(models)/Event";
import { NextResponse } from "next/server";

export async function Post(req: NextResponse) {
  try {
    const body = await req.json();
    const eventData = body.formData;
    await Event.create(eventData);

    return NextResponse.json({ message: "Event created"}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}