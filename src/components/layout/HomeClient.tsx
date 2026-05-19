'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import MeetingPopup from '@/components/ui/MeetingPopup';

interface MeetingCtx {
  openMeeting: () => void;
}

export const MeetingContext = createContext<MeetingCtx | null>(null);

export function useMeeting() {
  return useContext(MeetingContext);
}

// AJUSTE_LANZAMIENTO: popup deshabilitado temporalmente — todos los CTAs redirigen a WhatsApp
// Para revertir: cambiar openMeeting a () => setOpen(true) y descomentar <MeetingPopup>
// Ver docs/ajustes_de_lanzamiento/popup_whatsapp_temporal.md
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') ?? '';
const WA_MSG = encodeURIComponent('Hola, quiero agendar una llamada de 30 min.');

export default function HomeClient({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openMeeting = () => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`, '_blank', 'noopener,noreferrer');
  };
  return (
    <MeetingContext.Provider value={{ openMeeting }}>
      {children}
      {/* MeetingPopup preservado — descomentar para reactivar el flujo de agenda */}
      {/* <MeetingPopup isOpen={open} onClose={() => setOpen(false)} /> */}
    </MeetingContext.Provider>
  );
}
