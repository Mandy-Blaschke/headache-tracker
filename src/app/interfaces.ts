export interface Entry {
  id?: string;
  date: string;
  time: string;
  headache: boolean;
  intensity: string;
  water: boolean;
  pill: boolean;
  mood: string;
  weather: string;
  illness: boolean;
}


export interface Day {
  date: string;
  stringDate: string;
  entries: Entry[];
  hasHeadache: boolean;
  headacheLevel: number;
}