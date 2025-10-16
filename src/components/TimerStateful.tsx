"use client";
import TimerView from "@/components/Timer";
import { Timer } from "@/model/timer";
import { useState } from "react";

export default function TimerStateful() {
  const [timer, setTimer] = useState({
    intervals: [
      {
        name: "Walking",
        color: "green",
        totalSeconds: 3,
      },
      {
        name: "Running",
        color: "red",
        totalSeconds: 5,
      },
    ],
  } as Timer);
  return <TimerView timer={timer} onUpdate={setTimer} />;
}
