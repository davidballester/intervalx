import { IconButton } from "@chakra-ui/react";
import { LuPause, LuPlay } from "react-icons/lu";

export default function ToggleCountdown({
  active,
  onToggle,
}: {
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <IconButton onClick={onToggle} variant="outline" size="2xl">
      {active ? <LuPause /> : <LuPlay />}
    </IconButton>
  );
}
