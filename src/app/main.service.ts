import {Injectable} from '@angular/core';
import {Entry} from './interfaces';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MainService {

  constructor() {
  }

  async save(entry: Entry): Promise<void> {
    // TODO
    console.log('save');
  }

  async editEntry(entry: Entry): Promise<void> {
    // TODO
  }

  async deleteEntry(entry: Entry): Promise<void> {
    // TODO
  }

  async loadAllEntries(): Promise<Entry[]> {
    return [
      {
        date: '2021-01-15',
        time: '19:37',
        headache: false,
        intensity: 'middleIntensity',
        water: true,
        pill: true,
        mood: 'well',
        weather: 'sunny',
        illness: true
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: true,
        intensity: 'middleIntensity',
        water: true,
        pill: true,
        mood: 'bad',
        weather: 'cloudy',
        illness: true
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: true,
        intensity: 'weakIntensity',
        water: false,
        pill: true,
        mood: 'stressed',
        weather: 'rainfall',
        illness: true
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: true,
        intensity: 'middleIntensity',
        water: true,
        pill: false,
        mood: 'relaxed',
        weather: 'foggy',
        illness: true
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: true,
        intensity: 'weakIntensity',
        water: true,
        pill: true,
        mood: 'tired',
        weather: 'rainfall',
        illness: true
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: true,
        intensity: 'strongIntensity',
        water: true,
        pill: false,
        mood: 'fresh',
        weather: 'thunderstorm',
        illness: false
      },
      {
        date: '2021-01-15',
        time: '19:37',
        headache: false,
        intensity: '',
        water: true,
        pill: true,
        mood: 'bad',
        weather: 'stormy',
        illness: false
      }
    ];
  }
}
