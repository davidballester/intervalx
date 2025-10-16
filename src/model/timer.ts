export interface Timer {
  intervals: Interval[];
}

export interface Interval {
  name: string;
  color: string;
  totalSeconds: number;
}
