'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAvailability, type DayAvailability } from '@/lib/availability';

export interface MeetingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function weekLabel(days: DayAvailability[]): string {
  if (!days.length) return '';
  const first = days[0];
  const last = days[days.length - 1];
  if (first.monthLabel === last.monthLabel) {
    return `${first.dayNum}–${last.dayNum} ${first.monthLabel}`;
  }
  return `${first.dayNum} ${first.monthLabel} – ${last.dayNum} ${last.monthLabel}`;
}

interface DayBtnProps {
  day: DayAvailability;
  selectedIso: string | null;
  onSelect: (d: DayAvailability) => void;
}

function DayBtn({ day, selectedIso, onSelect }: DayBtnProps) {
  const isSelected = selectedIso === day.iso;
  const hasAvailable = day.slots.some(s => s.available);
  const disabled = day.isPast || !hasAvailable;

  return (
    <button
      disabled={disabled}
      onClick={() => onSelect(day)}
      className={[
        'flex flex-col items-center py-[10px] rounded-[10px] border-[0.5px] text-[12px] font-bold transition-all',
        disabled
          ? 'opacity-25 cursor-not-allowed bg-transparent border-[rgba(28,24,40,0.06)] text-[var(--muted)]'
          : isSelected
            ? 'gb text-white border-transparent shadow-[0_4px_16px_rgba(232,65,122,0.2)] cursor-pointer'
            : day.isToday
              ? 'bg-[rgba(28,24,40,0.06)] border-[var(--dark)] text-[var(--dark)] hover:border-[var(--mg)] cursor-pointer'
              : 'bg-[rgba(28,24,40,0.03)] border-[rgba(28,24,40,0.1)] text-[var(--dark)] hover:border-[var(--mg)] cursor-pointer',
      ].join(' ')}
    >
      <span className="text-[9px] font-semibold opacity-60 uppercase tracking-[0.05em]">{day.dayLabel}</span>
      <span className="text-[15px] font-extrabold leading-none mt-[3px]">{day.dayNum}</span>
    </button>
  );
}

export default function MeetingPopup({ isOpen, onClose }: MeetingPopupProps) {
  const [step, setStep] = useState<'calendar' | 'form' | 'submitting' | 'done' | 'error'>('calendar');
  const [loading, setLoading] = useState(false);
  const [week1, setWeek1] = useState<DayAvailability[]>([]);
  const [week2, setWeek2] = useState<DayAvailability[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayAvailability | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });

  useEffect(() => {
    if (!isOpen) return;
    setStep('calendar');
    setSelectedDay(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', whatsapp: '', message: '' });
    setLoading(true);
    getAvailability().then(({ week1: w1, week2: w2 }) => {
      setWeek1(w1);
      setWeek2(w2);
      setLoading(false);
    });
  }, [isOpen]);

  const handleSelectDay = (day: DayAvailability) => {
    setSelectedDay(day);
    setSelectedTime(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const locale = typeof document !== 'undefined'
      ? document.documentElement.lang || 'es'
      : 'es';
    const payload = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      message: formData.message,
      date: selectedDay?.iso ?? null,
      time: selectedTime,
      locale,
    };
    console.log('[MeetingPopup] Enviando al webhook:', payload);
    setStep('submitting');
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_MEETING;
      if (!webhookUrl) throw new Error('NEXT_PUBLIC_N8N_WEBHOOK_MEETING no configurado');
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook respondió ${res.status}`);
      setStep('done');
    } catch (err) {
      console.error('[MeetingPopup] Error al enviar:', err);
      setStep('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-[16px]"
        >
          <div
            className="absolute inset-0 bg-[rgba(14,14,18,0.7)] backdrop-blur-[8px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-white rounded-[20px] shadow-[0_30px_80px_rgba(28,24,40,0.25)] max-w-[520px] w-full max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Header */}
            <div className="px-[28px] pt-[28px] pb-[20px] border-b-[0.5px] border-[rgba(28,24,40,0.08)]">
              <div className="flex items-center justify-between mb-[6px]">
                <h3 className="text-[18px] font-extrabold text-[var(--dark)] tracking-[-0.5px]">
                  {step === 'done' ? '¡Listo!' : step === 'error' ? 'Algo salió mal' : 'Agendá una llamada'}
                </h3>
                <button
                  onClick={onClose}
                  className="w-[28px] h-[28px] rounded-full bg-[rgba(28,24,40,0.05)] flex items-center justify-center border-none cursor-pointer text-[14px] text-[var(--muted)] hover:bg-[rgba(28,24,40,0.1)] transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-[13px] text-[var(--muted)]">
                {step === 'done'
                  ? 'Te contactaremos para confirmar los detalles.'
                  : step === 'error'
                    ? 'No se pudo enviar tu solicitud. Intentá de nuevo o escribinos por WhatsApp.'
                    : '30 min · Sin compromiso · Sin ventas agresivas'}
              </p>
            </div>

            <div className="px-[28px] py-[24px]">

              {/* ── STEP: CALENDAR ── */}
              {step === 'calendar' && (
                <div>
                  {loading ? (
                    <div className="flex items-center justify-center py-[48px]">
                      <div className="w-[24px] h-[24px] rounded-full border-[2px] border-[rgba(28,24,40,0.1)] border-t-[var(--mg)] animate-spin" />
                    </div>
                  ) : (
                    <>
                      {/* Current week */}
                      <div className="mb-[20px]">
                        <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.1em] mb-[10px]">
                          Semana actual · {weekLabel(week1)}
                        </p>
                        <div className="grid grid-cols-6 gap-[6px]">
                          {week1.map(day => (
                            <DayBtn
                              key={day.iso}
                              day={day}
                              selectedIso={selectedDay?.iso ?? null}
                              onSelect={handleSelectDay}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Next week */}
                      <div className="mb-[24px]">
                        <p className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-[0.1em] mb-[10px]">
                          Próxima semana · {weekLabel(week2)}
                        </p>
                        <div className="grid grid-cols-6 gap-[6px]">
                          {week2.map(day => (
                            <DayBtn
                              key={day.iso}
                              day={day}
                              selectedIso={selectedDay?.iso ?? null}
                              onSelect={handleSelectDay}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Time slots */}
                      {selectedDay && (
                        <div className="border-t-[0.5px] border-[rgba(28,24,40,0.07)] pt-[20px]">
                          <p className="text-[11px] font-bold text-[var(--dark)] uppercase tracking-[0.08em] mb-[12px]">
                            {selectedDay.dayLabel} {selectedDay.dayNum} de {selectedDay.monthLabel} — horarios (AR)
                          </p>
                          <div className="grid grid-cols-3 gap-[8px] mb-[24px]">
                            {selectedDay.slots.map(slot => (
                              <button
                                key={slot.time}
                                disabled={!slot.available}
                                onClick={() => slot.available && setSelectedTime(slot.time)}
                                className={[
                                  'py-[10px] rounded-[8px] border-[0.5px] text-[13px] font-semibold transition-all',
                                  !slot.available
                                    ? 'opacity-25 cursor-not-allowed bg-transparent border-[rgba(28,24,40,0.06)] text-[var(--muted)] line-through'
                                    : selectedTime === slot.time
                                      ? 'gb text-white border-transparent cursor-pointer'
                                      : 'bg-[rgba(28,24,40,0.02)] border-[rgba(28,24,40,0.08)] text-[var(--dark)] hover:border-[var(--mg)] cursor-pointer',
                                ].join(' ')}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedTime && (
                        <button
                          onClick={() => setStep('form')}
                          className="w-full gb text-white py-[12px] rounded-[10px] font-bold text-[14px] border-none cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          Continuar →
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* ── STEP: SUBMITTING ── */}
              {step === 'submitting' && (
                <div className="flex flex-col items-center justify-center py-[48px] gap-[16px]">
                  <div className="w-[32px] h-[32px] rounded-full border-[2px] border-[rgba(28,24,40,0.1)] border-t-[var(--mg)] animate-spin" />
                  <p className="text-[13px] text-[var(--muted)]">Enviando tu solicitud…</p>
                </div>
              )}

              {/* ── STEP: FORM ── */}
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
                  <p className="text-[12px] text-[var(--muted)] -mt-[4px] mb-[4px]">
                    📅 {selectedDay?.dayLabel} {selectedDay?.dayNum} de {selectedDay?.monthLabel} a las {selectedTime}hs (Argentina)
                  </p>

                  {(
                    [
                      { key: 'name' as const, label: 'Nombre', type: 'text' },
                      { key: 'email' as const, label: 'Email', type: 'email' },
                      { key: 'whatsapp' as const, label: 'WhatsApp', type: 'tel' },
                    ] as const
                  ).map(field => (
                    <div key={field.key}>
                      <label className="text-[12px] font-bold text-[var(--dark)] uppercase tracking-[0.06em] block mb-[6px]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={formData[field.key]}
                        onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full py-[10px] px-[14px] rounded-[8px] border-[0.5px] border-[rgba(28,24,40,0.12)] text-[14px] text-[var(--dark)] bg-[rgba(28,24,40,0.02)] outline-none transition-colors focus:border-[var(--mg)]"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-[12px] font-bold text-[var(--dark)] uppercase tracking-[0.06em] block mb-[6px]">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={3}
                      className="w-full py-[10px] px-[14px] rounded-[8px] border-[0.5px] border-[rgba(28,24,40,0.12)] text-[14px] text-[var(--dark)] bg-[rgba(28,24,40,0.02)] outline-none transition-colors focus:border-[var(--mg)] resize-none"
                    />
                  </div>

                  <div className="flex gap-[10px]">
                    <button
                      type="button"
                      onClick={() => setStep('calendar')}
                      className="flex-1 py-[12px] rounded-[10px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] font-bold text-[13px] border-none cursor-pointer hover:bg-[rgba(28,24,40,0.08)] transition-colors"
                    >
                      ← Volver
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] gb text-white py-[12px] rounded-[10px] font-bold text-[14px] border-none cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      Confirmar reunión
                    </button>
                  </div>
                </form>
              )}

              {/* ── STEP: ERROR ── */}
              {step === 'error' && (
                <div className="text-center py-[20px]">
                  <div className="w-[56px] h-[56px] rounded-full bg-[rgba(232,65,122,0.1)] flex items-center justify-center mx-auto mb-[16px]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--mg)" strokeWidth="2.5" className="w-[28px] h-[28px]">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-[18px] font-extrabold text-[var(--dark)] mb-[8px]">No se pudo enviar</h4>
                  <p className="text-[14px] text-[var(--muted)] mb-[24px]">
                    Revisá tu conexión e intentá de nuevo, o escribinos directo por WhatsApp.
                  </p>
                  <button
                    onClick={() => setStep('form')}
                    className="gb text-white py-[10px] px-[24px] rounded-[10px] font-bold text-[14px] border-none cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              )}

              {/* ── STEP: DONE ── */}
              {step === 'done' && (
                <div className="text-center py-[20px]">
                  <div className="w-[56px] h-[56px] rounded-full gb flex items-center justify-center mx-auto mb-[16px]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[28px] h-[28px]">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-[18px] font-extrabold text-[var(--dark)] mb-[8px]">Reunión agendada</h4>
                  <p className="text-[14px] text-[var(--muted)] mb-[24px]">
                    Te enviamos un email de confirmación con los detalles de la llamada.
                  </p>
                  <button
                    onClick={onClose}
                    className="gb text-white py-[10px] px-[24px] rounded-[10px] font-bold text-[14px] border-none cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Cerrar
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
