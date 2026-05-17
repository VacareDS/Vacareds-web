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

function mockSlots(date: Date): TimeSlot[] {
  const d = date.getDate();
  const occupied = new Set<string>();
  if (d % 3 === 0) occupied.add('10:00');
  if (d % 4 === 0) occupied.add('15:00');
  if (d % 5 === 0) occupied.add('09:00');
  if (d % 7 === 0) { occupied.add('11:00'); occupied.add('17:00'); }
  if (d % 9 === 0) { occupied.add('16:00'); occupied.add('10:00'); }
  return TIMES.map(time => ({ time, available: !occupied.has(time) }));
}

function buildWeek(start: Date, today: Date): DayAvailability[] {
  const days: DayAvailability[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dow = d.getDay();
    if (dow === 0) continue; // Sundays never available
    days.push({
      date: d,
      iso: d.toISOString().split('T')[0],
      dayLabel: DAY_LABELS[dow],
      dayNum: d.getDate(),
      monthLabel: MONTH_LABELS[d.getMonth()],
      isPast: d < today,
      isToday: d.getTime() === today.getTime(),
      slots: mockSlots(d),
    });
  }
  return days;
}

// Replace this function body with a real webhook call when ready.
// The signature (async, same return shape) stays the same.
export async function getAvailability(): Promise<{ week1: DayAvailability[]; week2: DayAvailability[] }> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dow = today.getDay();
  const toMonday = dow === 0 ? -6 : 1 - dow;

  const monday1 = new Date(today);
  monday1.setDate(today.getDate() + toMonday);

  const monday2 = new Date(monday1);
  monday2.setDate(monday1.getDate() + 7);

  return {
    week1: buildWeek(monday1, today),
    week2: buildWeek(monday2, today),
  };
}
