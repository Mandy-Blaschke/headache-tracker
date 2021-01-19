import {Injectable} from '@angular/core';
import {Entry} from './interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MainService {

  pseudonym = '';

  constructor(private http: HttpClient) {
  }

  async save(entry: Entry): Promise<void> {
    await this.http.post('https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-' + this.pseudonym, entry).toPromise();
  }

  async editEntry(entry: Entry): Promise<void> {
    await this.http.put('https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-' + this.pseudonym + '/' + entry.id, entry).toPromise();
  }

  async deleteEntry(entry: Entry): Promise<void> {
    await this.http.delete('https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-' + this.pseudonym + '/' + entry.id).toPromise();
  }

  async loadAllEntries(): Promise<Entry[]> {
    const allEntries = await this.http
      .get<Entry[]>('https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-' + this.pseudonym)
      .toPromise();

    if (allEntries.length > 0) {
      return allEntries;
    } else {
      return [];
    }
  }
}
