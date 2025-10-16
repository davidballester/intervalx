import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";

export default function Countdown({
  active,
  currentSeconds,
  color,
  onTick,
}: {
  active: boolean;
  currentSeconds: number;
  color: string;
  onTick: () => void;
}) {
  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!active) {
        return;
      }
      onTick();
    }, 1e3);
    return () => clearInterval(interval);
  }, [onTick]);
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(3, 1fr)"
      textAlign="center"
      opacity={active ? "1" : "0.5"}
    >
      <GridItem>
        <CountdownText color={color}>
          {String(minutes).padStart(2, "0")}
        </CountdownText>
      </GridItem>
      <GridItem>
        <CountdownText color={color}>:</CountdownText>
      </GridItem>
      <GridItem>
        <CountdownText color={color}>
          {String(seconds).padStart(2, "0")}
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
