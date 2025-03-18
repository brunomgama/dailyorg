"use client";

import { useEffect, useState } from "react";
import { FullScreenCalendar } from "@/components/ui/fullscreen-calendar";

interface Event {
    id: number;
    name: string;
    time: string;
    datetime: string;
}

interface CalendarData {
    day: Date;
    events: Event[];
}

function Calendar() {
    const [events, setEvents] = useState<CalendarData[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            console.log("Fetching events from API...");
            try {
                const response = await fetch("/api/events");
                const data = await response.json();

                console.log("Fetched events from API:", data);
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="flex flex-1 flex-col p-4">
            <FullScreenCalendar data={events} />
        </div>
    );
}

export { Calendar };
