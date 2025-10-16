import { Interval } from "@/model/timer";
import { Button, Text } from "@chakra-ui/react";

export default function NextInterval({
  interval,
  onClick,
}: {
  interval: Interval;
  onClick: () => void;
}) {
  return (
    <Button variant="ghost" onClick={onClick}>
      Coming next: <Text color={interval.color}>{interval.name}</Text>
    </Button>
  );
}
