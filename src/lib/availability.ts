export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DayAvailability {
  date: Date;
  iso: string;
  dayLabel: string;
  dayNum: number;
  monthLabel: string;
  isPast: boolean;
  isToday: boolean;
  slots: TimeSlot[];
}

const TIMES = ['09:00', '10:00', '11:00', '15:00', '16:00', '17:00'];
const DAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTH_LABELS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function buildWeek(start: Date, today: Date, bookedSet: Set<string>): DayAvailability[] {
  const days: DayAvailability[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dow = d.getDay();
    if (dow === 0) continue;
    const iso = d.toISOString().split('T')[0];
    days.push({
      date: d,
      iso,
      dayLabel: DAY_LABELS[dow],
      dayNum: d.getDate(),
      monthLabel: MONTH_LABELS[d.getMonth()],
      isPast: d < today,
      isToday: d.getTime() === today.getTime(),
      slots: TIMES.map(time => ({ time, available: !bookedSet.has(`${iso}|${time}`) })),
    });
  }
  return days;
}

export async function getAvailability(): Promise<{ week1: DayAvailability[]; week2: DayAvailability[] }> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_AVAILABILITY;
  let bookedSlots: Array<{ iso: string; time: string }> = [];

  if (webhookUrl) {
    try {
      const res = await fetch(`${webhookUrl}?t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        bookedSlots = data.bookedSlots ?? [];
      }
    } catch {
      // si n8n no responde, mostrar todo disponible — mejor que romper el popup
    }
  }

  const bookedSet = new Set(bookedSlots.map(s => `${s.iso}|${s.time}`));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dow = today.getDay();
  const toMonday = dow === 0 ? -6 : 1 - dow;

  const monday1 = new Date(today);
  monday1.setDate(today.getDate() + toMonday);
  const monday2 = new Date(monday1);
  monday2.setDate(monday1.getDate() + 7);

  return {
    week1: buildWeek(monday1, today, bookedSet),
    week2: buildWeek(monday2, today, bookedSet),
  };
}
