import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../main.service';
import {Entry} from '../interfaces';
import {formatDateStringForView} from '../utils';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  entryToEdit: Entry;
  entryToEditDate: string;
  entryToEditTime: string;
  allEntries: Entry[] = [];
  entryToEditDateView: string;

  constructor(private activatedRoute: ActivatedRoute, public service: MainService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.allEntries = await this.service.loadAllEntries();
    this.entryToEditDate = this.activatedRoute.snapshot.paramMap.get('datum');
    this.entryToEditTime = this.activatedRoute.snapshot.paramMap.get('zeit');
    this.findEntryToEdit();
    this.entryToEditDateView = formatDateStringForView(this.entryToEditDate);
  }

  findEntryToEdit(): void {
    this.allEntries.filter((entry) => entry.date === this.entryToEditDate);
    this.entryToEdit = this.allEntries.find((entry) => entry.time === this.entryToEditTime);
  }

  updateEntry(): void {
    console.log(this.entryToEdit);
    // TODO
  }

  async cancel(): Promise<void> {
    this.entryToEdit = undefined;
    await this.router.navigate(['/eintrag/' + this.entryToEditDate]);
  }
}
