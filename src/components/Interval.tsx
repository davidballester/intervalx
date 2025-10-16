"use client";
import { Interval } from "@/model/timer";
import { Heading, VStack } from "@chakra-ui/react";
import Countdown from "./Countdown";
import ToggleCountdown from "./ToggleCountdown";
import { useEffect, useState } from "react";

export default function IntervalActiveView({
  interval,
  onFinished,
}: {
  interval: Interval;
  onFinished: () => void;
}) {
  const [active, setActive] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(
    interval.totalSeconds
  );
  useEffect(() => {
    setActive(true);
    setRemainingSeconds(interval.totalSeconds);
  }, [setActive, setRemainingSeconds, interval]);
  return (
    <VStack gap={4}>
      <Heading size="5xl">{interval.name}</Heading>
      <Countdown
        active={active}
        currentSeconds={remainingSeconds}
        color={interval.color}
        onTick={() => {
          const newRemainingSeconds = Math.max(0, remainingSeconds - 1);
          setRemainingSeconds(newRemainingSeconds);
          if (newRemainingSeconds <= 0) {
            onFinished();
          }
        }}
      />
      <ToggleCountdown
        active={active}
        onToggle={() => {
          setActive(!active);
        }}
      />
    </VStack>
  );
}
