export interface Workout {
  name: string;
  trainer: string;
  description: string;
  location: string;
  date: Date;
}

export interface State {
  workouts: Workout[];
}
