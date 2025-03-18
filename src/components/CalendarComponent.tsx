'use client'

import { useEffect, useState } from 'react'
import Calendar from './calendar/calendar'
import { CalendarEvent, Mode } from './calendar/calendar-types'
import { supabase } from "@/lib/supabase";
import {generateMockEvents} from "@/lib/mock-calendar-events";

export default function CalendarComponent() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [mode, setMode] = useState<Mode>('month')
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        console.log("Fetched events:", data);

        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          color: event.color,
          starttime: new Date(event.starttime),
          endtime: new Date(event.endtime),
        }));

        setEvents(formattedEvents);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Calendar
      events={events}
      setEvents={setEvents}
      mode={mode}
      setMode={setMode}
      date={date}
      setDate={setDate}
    />
  )
}
