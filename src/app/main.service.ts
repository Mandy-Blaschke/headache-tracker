import { Injectable } from '@angular/core';
import {Entry} from './interfaces';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MainService {

  constructor() { }

  async save(entry: Entry): Promise<void> {
    console.log('save');
  }

  async editEntry(entry: Entry): Promise<void> {
  }

  async deleteEntry(entry: Entry): Promise<void> {
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
        date: '2021-01-14',
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
        date: '2021-01-13',
        time: '19:37',
        headache: true,
        intensity: 'weakIntensity',
        water: false,
        pill: true,
        mood: 'stressed',
        weather: 'thunderstorm',
        illness: true
      },
      {
        date: '2021-01-12',
        time: '19:37',
        headache: true,
        intensity: '',
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
        intensity: 'strongIntensity',
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
        pill: true,
        mood: 'fresh',
        weather: 'stormy',
        illness: false
      }
    ];
  }
}
