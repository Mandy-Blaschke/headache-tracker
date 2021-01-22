import {Component, OnInit} from '@angular/core';
import {Day, Entry} from '../interfaces';
import {formatDateStringForView, formatDateToString} from '../utils';
import {MainService} from '../main.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  dates: Day[] = [];
  entries: Entry[] = [];

  filterDays = this.service.daysForOverview > 0 ? this.service.daysForOverview : 7;

  ascending = false;
  ascendingButtonText = 'aufsteigend';

  constructor(private service: MainService) {
  }

  async ngOnInit(): Promise<void> {
    this.entries = await this.service.loadAllEntries();
    this.filterDays = this.service.userSettings.daysInOverview;
    this.getDates();
  }

  getDates(): void {
    this.dates = [];
    if (this.filterDays <= 730) {
      for (let d = 0; d < this.filterDays; d++) {
        const dateOffset = (24 * 60 * 60 * 1000) * d;
        const date = new Date();
        date.setTime(date.getTime() - dateOffset);

        const stringDate = formatDateToString(date);

        const formattedStringDate = formatDateStringForView(stringDate);

        const entries: Entry[] = this.entries.filter((entry) => entry.date === stringDate);

        const anyEntryWithHeadache = entries.find((entry) => entry.headache === true);

        this.dates.push(
          {
            date: formattedStringDate,
            stringDate,
            entries,
            hasHeadache: anyEntryWithHeadache !== undefined,
            headacheLevel: this.getHeadAcheLevel(entries),
          }
        );
      }
    }
  }

  getHeadAcheLevel(list: Entry[]): number {
    let result = 0;

    for (const entry of list) {

      if (entry.headache) {

        if (entry.intensity === 'weakIntensity') {
          result = Math.max(result, 1);
        }
        if (entry.intensity === 'middleIntensity') {
          result = Math.max(result, 2);
        }
        if (entry.intensity === 'strongIntensity') {
          result = Math.max(result, 3);
        }
      }
    }

    return result;
  }

  filterDateChanged(): void {
    this.getDates();
  }

  sort(): void {
    this.dates.sort(() => {
      let pDateFloat = null;
      let cDateFloat = null;
      for (const day of this.dates) {
        const pDateArray = day.date.split('.');
        pDateFloat = parseFloat(pDateArray[2].concat('.', pDateArray[1], pDateArray[0]));

        const cDateArray = day.date.split('.');
        cDateFloat = parseFloat(cDateArray[2].concat('.', cDateArray[1], cDateArray[0]));
      }

      if (this.ascending) {
        return pDateFloat < cDateFloat ? 1 : -1;
      } else {
        return pDateFloat > cDateFloat ? 1 : -1;
      }
    });
  }

  toggleAscending(): void {
    this.ascending = !this.ascending;
    this.ascendingButtonText = !this.ascending ? 'aufsteigend' : 'absteigend';
    this.sort();
  }
}

