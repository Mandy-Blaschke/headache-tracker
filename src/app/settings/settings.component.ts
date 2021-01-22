import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {ColorScheme} from '../interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  visibleColors = false;
  visibleLogin = false;
  visibleDays = false;
  visibleDelete = false;

  activeColorScheme = this.service.colorScheme;

  colors: ColorScheme[] = [
    {
      name: 'Cyan',
      color: 'cyan',
    },
    {
      color: 'violet',
      name: 'Violett'
    },
    {
      color: 'red',
      name: 'Rot'
    },
    {
      color: 'orange',
      name: 'Orange'
    },
    {
      color: 'green',
      name: 'Grün'
    },
    {
      color: 'blue',
      name: 'Blau'
    }
  ];

  constructor(public service: MainService) {
  }

  ngOnInit(): void {
  }

  async setColorScheme(color: ColorScheme): Promise<void> {
    this.activeColorScheme = color;
    this.service.colorScheme = this.activeColorScheme;
  }
}
