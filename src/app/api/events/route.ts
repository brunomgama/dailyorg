import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
    console.log("Fetching events from Supabase...");

    const { data, error } = await supabase.from("events").select("id, name, time, datetime, day, color");

    if (error) {
        console.error("Error fetching events:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedData = data.reduce((acc: any[], event: any) => {
        const eventDate = new Date(event.day);

        const existingDay = acc.find((item) => item.day.getTime() === eventDate.getTime());

        if (existingDay) {
            existingDay.events.push({
                id: event.id,
                name: event.name,
                time: event.time,
                datetime: event.datetime,
                color: event.color,
            });
        } else {
            acc.push({
                day: eventDate,
                events: [
                    {
                        id: event.id,
                        name: event.name,
                        time: event.time,
                        datetime: event.datetime,
                        color: event.color,
                    },
                ],
            });
        }

        return acc;
    }, []);

    return NextResponse.json(formattedData);
}

