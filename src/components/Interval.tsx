"use client";
import { Interval } from "@/model/timer";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Countdown from "./Countdown";
import ToggleCountdown from "./ToggleCountdown";
import { useEffect, useState } from "react";

export default function IntervalActiveView({
  isFirstInterval,
  interval,
  onFinished,
}: {
  isFirstInterval: boolean;
  interval: Interval;
  onFinished: () => void;
}) {
  const [active, setActive] = useState(false);
  const [remainingMs, setRemainingMs] = useState(interval.totalSeconds * 1e3);
  useEffect(() => {
    if (!isFirstInterval) {
      setActive(true);
    }
    setRemainingMs(interval.totalSeconds * 1e3);
  }, [setActive, setRemainingMs, interval]);
  return (
    <VStack gap={4}>
      <Heading size="5xl" textAlign="center">
        {interval.name}
      </Heading>
      <Text fontSize="2xl">{interval.text ?? ""}</Text>
      <Countdown
        active={active}
        currentSeconds={Math.ceil(remainingMs / 1e3)}
        color={interval.color}
        onTick={(elapsedMs) => {
          const newRemainingMs = Math.max(0, remainingMs - elapsedMs);
          setRemainingMs(newRemainingMs);
          if (newRemainingMs <= 0) {
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
