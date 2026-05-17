'use client';

import { useMeeting } from '@/components/layout/HomeClient';

export default function OpenMeetingBtn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const meeting = useMeeting();
  return (
    <button onClick={() => meeting?.openMeeting()} className={className}>
      {children}
    </button>
  );
}
