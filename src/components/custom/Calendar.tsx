"use client";

import { FullScreenCalendar } from "@/components/ui/fullscreen-calendar";

const dummyEvents = [
    {
        day: new Date("2025-01-02"),
        events: [
            { id: 1, name: "Q1 Planning Session", time: "10:00 AM", datetime: "2025-01-02T00:00" },
            { id: 2, name: "Team Sync", time: "2:00 PM", datetime: "2025-01-02T00:00" },
        ],
    },
    {
        day: new Date("2025-01-07"),
        events: [
            { id: 3, name: "Product Launch Review", time: "2:00 PM", datetime: "2025-01-07T00:00" },
            { id: 4, name: "Marketing Sync", time: "11:00 AM", datetime: "2025-01-07T00:00" },
            { id: 5, name: "Vendor Meeting", time: "4:30 PM", datetime: "2025-01-07T00:00" },
        ],
    },
];

function Calendar() {
    return (
        <div className="flex flex-1 flex-col p-4">
            <FullScreenCalendar data={dummyEvents} />
        </div>
    );
}

export { Calendar };
