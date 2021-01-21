import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {Entry} from '../interfaces';
import {formatDateToString, formatTimeToString} from '../utils';
import {Router} from '@angular/router';

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

  intensityWarning = false;

  constructor(public service: MainService, private router: Router) {
  }

  ngOnInit(): void {
    this.date = formatDateToString(new Date());
    this.time = formatTimeToString(new Date());
  }

  async saveEntry(): Promise<void> {
    if (this.headache && this.intensity !== '' || !this.headache) {
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
        showDeleteWarning: false,
      };
      await this.service.save(entry);
      await this.router.navigate(['/uebersicht']);
    } else {
      this.intensityWarning = true;
    }
  }
}
