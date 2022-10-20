export interface Workout {
  name: string;
  trainer: string;
  description: string;
  location: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export interface State {
  workouts: Workout[];
}
