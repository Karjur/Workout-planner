export interface Workout {
  id: number;
  name: string;
  trainer: string;
  description: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface State {
  workouts: Workout[];
}
