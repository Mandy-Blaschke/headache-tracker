import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entry} from '../interfaces';
import {MainService} from '../main.service';
import {formatDateStringForView} from '../utils';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  activeDate: string;
  dateForView: string;
  entries: Entry[] = [];
  allEntries: Entry[] = [];

  constructor(private activatedRoute: ActivatedRoute, public service: MainService) {
  }

  async ngOnInit(): Promise<void> {
    this.allEntries = await this.service.loadAllEntries();
    this.activeDate = this.activatedRoute.snapshot.paramMap.get('datum');
    this.findActiveDate();
    this.dateForView = formatDateStringForView(this.activeDate);
  }

  findActiveDate(): void {
    this.entries = this.allEntries.filter((entry: Entry) => entry.date === this.activeDate);
  }
}
