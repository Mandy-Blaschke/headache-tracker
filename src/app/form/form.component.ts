import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {Entry} from '../interfaces';
import {formatDateToString, formatTimeToString} from '../utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  headache = false;
  mood = '';
  water = false;
  intensity = '';
  pill = false;
  weather = '';
  illness = false;
  date: string;
  time: string;

  test = false;

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.date = formatDateToString(new Date());
    this.time = formatTimeToString(new Date());
  }

  async saveEntry(): Promise<void> {
    const entry: Entry = {
      date: this.date,
      time: this.time,
      headache: this.headache,
      intensity: this.intensity,
      water: this.water,
      pill: this.pill,
      mood: this.mood,
      weather: this.weather,
      illness: this.illness,
    };
    await this.service.save(entry);
  }
}
