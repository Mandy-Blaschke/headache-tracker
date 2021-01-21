import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  deleteWarning = false;

  constructor(private activatedRoute: ActivatedRoute, public service: MainService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.loadAndSort();
  }

  async loadAndSort(): Promise<void> {
    this.allEntries = await this.service.loadAllEntries();
    this.activeDate = this.activatedRoute.snapshot.paramMap.get('datum');
    this.findActiveDate();
    this.dateForView = formatDateStringForView(this.activeDate);
    this.sortEntriesByTime();
  }

  findActiveDate(): void {
    this.entries = this.allEntries.filter((entry: Entry) => entry.date === this.activeDate);
  }

  askForDeleteEntry(entry: Entry): void {
    entry.showDeleteWarning = true;
  }

  async deleteEntry(entry: Entry): Promise<void> {
    await this.service.deleteEntry(entry);
    await this.loadAndSort();
  }

  async cancelDeleteEntry(entry: Entry): Promise<void> {
    await this.router.navigate(['/eintrag/' + entry.date]);
    entry.showDeleteWarning = false;
  }

  sortEntriesByTime(): void {
    let entryH = '';
    let entryM = '';
    for (const entry of this.entries) {
      const entryTime = entry.time.split(':');
      entryH = entryTime[0];
      entryM = entryTime[1];
    }
    this.entries.sort((p, c) => {
      const pArray = p.time.split(':');
      const pFloat = parseFloat(pArray[0].concat('.', pArray[1]));

      const cArray = c.time.split(':');
      const cFloat = parseFloat(cArray[0].concat('.', cArray[1]));

      return pFloat < cFloat ? 1 : -1;
    });
  }
}
