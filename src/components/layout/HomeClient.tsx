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

export default function HomeClient({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <MeetingContext.Provider value={{ openMeeting: () => setOpen(true) }}>
      {children}
      <MeetingPopup isOpen={open} onClose={() => setOpen(false)} />
    </MeetingContext.Provider>
  );
}
