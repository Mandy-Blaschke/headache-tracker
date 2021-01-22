import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public service: MainService) {
  }

  ngOnInit(): void {
    this.service.colorScheme = { color: 'cyan', name: 'Cyan'};
  }

}
