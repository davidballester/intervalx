export interface Timer {
  intervals: Interval[];
}

export interface Interval {
  name: string;
  text: string;
  color: string;
  totalSeconds: number;
}
