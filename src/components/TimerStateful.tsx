"use client";
import TimerView from "@/components/Timer";
import { Timer } from "@/model/timer";
import { useState } from "react";

export default function TimerStateful() {
  const [timer, setTimer] = useState({
    intervals: [
      {
        name: "Walking",
        text: "5-6 km/h",
        color: "green",
        totalSeconds: 60,
      },
      {
        name: "Warm Up",
        text: "8-9 km/h",
        color: "yellow",
        totalSeconds: 120,
      },
      {
        name: "First Interval",
        text: "11-12 km/h",
        color: "orange",
        totalSeconds: 180,
      },
      {
        name: "Rest",
        text: "8-9 km/h",
        color: "yellow",
        totalSeconds: 120,
      },
      {
        name: "Second Interval",
        text: "11-12 km/h",
        color: "orange",
        totalSeconds: 360,
      },
      {
        name: "Rest",
        text: "8-9 km/h",
        color: "yellow",
        totalSeconds: 120,
      },
      {
        name: "Third Interval",
        text: "11-12 km/h",
        color: "orange",
        totalSeconds: 180,
      },
      {
        name: "Sprint",
        text: "12-13 km/h",
        color: "red",
        totalSeconds: 60,
      },
      {
        name: "Wind Down",
        text: "8-9 km/h",
        color: "orange",
        totalSeconds: 180,
      },
      {
        name: "Walking",
        text: "5-6 km/h",
        color: "green",
        totalSeconds: 120,
      },
    ],
  } as Timer);
  return <TimerView timer={timer} onUpdate={setTimer} />;
}
