import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {ColorScheme} from '../interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  colorBox = false;
  loginBox = false;
  dayBox = false;
  deleteBox = false;

  activeColorScheme: ColorScheme;
  overviewDays = 7;

  colors: ColorScheme[] = [
    {name: 'Cyan', color: 'cyan'},
    {color: 'violet', name: 'Violett'},
    {color: 'red', name: 'Rot'},
    {color: 'orange', name: 'Orange'},
    {color: 'green', name: 'Grün'},
    {color: 'blue', name: 'Blau'}
  ];

  constructor(public service: MainService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
  }

  async setColorScheme(color: ColorScheme): Promise<void> {
    this.activeColorScheme = color;
    this.service.colorScheme = this.activeColorScheme;
    await this.service.saveColorScheme(color);
  }

  async saveDaysOverview(numb: number): Promise<void> {
    numb = this.overviewDays;
    await this.service.saveDaysInOverview(numb);
  }

  async deleteAllData(): Promise<void> {
    await this.service.deleteAllData();
    await this.router.navigate(['/']);
  }

  cancelDeleting(): void {
    this.deleteBox = false;
  }

  deletePseudonym(): void {
    this.service.deletePseudonymFromLocalStorage();
  }
}
