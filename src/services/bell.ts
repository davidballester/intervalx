export function ringBell() {
  const audio = document.createElement("audio");
  audio.src = "/bell.mp3";
  audio.play();
}
