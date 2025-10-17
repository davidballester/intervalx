"use client";
import { Timer } from "@/model/timer";
import { Box, VStack } from "@chakra-ui/react";
import IntervalView from "./Interval";
import NextInterval from "./NextInterval";
import EndState from "./EndState";
import { useState } from "react";

export default function TimerView({ timer }: { timer: Timer }) {
  const [activeIntervalIndex, setActiveIntervalIndex] = useState(0);
  const activeInterval = timer.intervals[activeIntervalIndex];
  const nextInterval = !!activeInterval
    ? timer.intervals[activeIntervalIndex + 1]
    : null;
  return (
    <VStack gap={6} minH="vh" pr="9" pl="9" pb="12" pt="12">
      {activeInterval ? (
        <IntervalView
          isFirstInterval={activeIntervalIndex === 0}
          interval={activeInterval}
          onFinished={() => {
            setActiveIntervalIndex(activeIntervalIndex + 1);
          }}
        />
      ) : null}
      {!activeInterval && !nextInterval ? <EndState /> : null}
      <Box flexGrow="1"></Box>
      {!!nextInterval ? (
        <NextInterval
          interval={nextInterval}
          onClick={() => {
            setActiveIntervalIndex(activeIntervalIndex + 1);
          }}
        />
      ) : null}
    </VStack>
  );
}
