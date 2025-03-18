import { useCalendarContext } from '../../calendar-context'
import { format } from 'date-fns'
import CalendarHeaderDateIcon from './calendar-header-date-icon'
import CalendarHeaderDateChevrons from './calendar-header-date-chevrons'
import CalendarHeaderDateBadge from './calendar-header-date-badge'

export default function CalendarHeaderDate() {
  const { date } = useCalendarContext()
  return (
    <div className="flex items-center gap-2">
        {/* CURRENT DATE AS ICON */}
      <CalendarHeaderDateIcon />
      <div>
        <div className="flex items-center gap-1">
            {/* MONTH AND YEAR SELECTED */}
          <p className="text-lg font-semibold">{format(date, 'MMMM yyyy')}</p>
            {/* EVENT COUNTER */}
          <CalendarHeaderDateBadge />
        </div>
          {/* MONTH SLIDER WITH DATE WHICH HAS BEEN COMMENTED */}
        <CalendarHeaderDateChevrons />
      </div>
    </div>
  )
}
