export interface Workout {
  name: string;
  trainer: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface State {
  workouts: Workout[];
}
