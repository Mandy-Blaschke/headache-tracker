import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
