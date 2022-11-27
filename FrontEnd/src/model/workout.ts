import { TimeHTMLAttributes } from "vue";


export interface Workout {
  id: number;
  name: string;
  trainer: string;
  description: string;
  location: string;
  date: string;
  startTime: {hours: string; minutes:string;} | string;
  endTime: {hours: string; minutes:string;} | string;
}

// export interface State {
//   workouts: Workout[];
// }
