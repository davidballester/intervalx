"use client";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

const INTERVAL = 100;

export default function Countdown({
  active,
  currentSeconds,
  color,
  onTick,
}: {
  active: boolean;
  currentSeconds: number;
  color: string;
  onTick: (elapsedMs: number) => void;
}) {
  const [lastTickTimestamp, setLastTickTimestamp] = useState<number | null>(
    null
  );
  useEffect(() => {
    const interval = setTimeout(() => {
      if (!active) {
        return;
      }
      const now = Date.now();
      const elapsedMs =
        lastTickTimestamp == null ? INTERVAL : now - lastTickTimestamp;
      setLastTickTimestamp(now);
      onTick(elapsedMs);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [currentSeconds, onTick]);
  useEffect(() => {
    setLastTickTimestamp(active ? Date.now() : null);
  }, [active, setLastTickTimestamp]);
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(3, 1fr)"
      textAlign="center"
      opacity={active ? "1" : "0.5"}
    >
      <GridItem>
        <CountdownText color={color}>
          {String(Math.floor(currentSeconds / 60)).padStart(2, "0")}
        </CountdownText>
      </GridItem>
      <GridItem>
        <CountdownText color={color}>:</CountdownText>
      </GridItem>
      <GridItem>
        <CountdownText color={color}>
          {String(currentSeconds % 60).padStart(2, "0")}
        </CountdownText>
      </GridItem>
    </Grid>
  );
}

function CountdownText({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <Text textStyle="7xl" color={color}>
      {children}
    </Text>
  );
}
