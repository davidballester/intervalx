"use client";
import TimerStateful from "@/components/TimerStateful";
import { useWakeLock } from "@/components/useWakeLock";

export default function Home() {
  useWakeLock();
  return <TimerStateful />;
}
