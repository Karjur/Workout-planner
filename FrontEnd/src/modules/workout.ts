import { TimeHTMLAttributes } from 'vue';

export interface Workout {
  id: number;
  name: string;
  trainer: string;
  description: string;
  location: string;
  date: string;
  startTime: any;
  endTime: any;
}

export interface State {
  workouts: Workout[];
}
