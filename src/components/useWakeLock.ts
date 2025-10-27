import { useEffect } from "react";

export function useWakeLock() {
  useEffect(() => {
    navigator.wakeLock?.request?.("screen");
  }, []);
}
