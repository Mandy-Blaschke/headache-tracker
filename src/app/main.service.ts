import {Injectable} from '@angular/core';
import {UserSettings, Entry} from './interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MainService {

  pseudonym = '';
  daysForOverview: number;
  userSettings: UserSettings = {color: 'cyan', daysInOverview: 7};

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

  async deleteAllData(): Promise<void> {
    for (const entry of await this.loadAllEntries()) {
      await this.http.delete('https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-' + this.pseudonym + '/' + entry.id).toPromise();
    }

    const url = 'https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-color-' + this.pseudonym + '/';
    const items = await this.http.get<UserSettings[]>(url).toPromise();
    for (const item of items) {
      await this.http.delete(url + '/' + item.id).toPromise();
    }

    this.deletePseudonymFromLocalStorage();
    this.pseudonym = '';

    this.userSettings = {color: 'cyan', daysInOverview: 7};
  }

  async saveUserSettings(): Promise<void> {
    const url = 'https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-usersettings-' + this.pseudonym + '/';
    const items = await this.http.get<UserSettings[]>(url).toPromise();
    for (const item of items) {
      await this.http.delete(url + '/' + item.id).toPromise();
    }
    await this.http.post(url, this.userSettings).toPromise();
  }

  async loadUserSettings(): Promise<void> {
    const url = 'https://api.mandy-blaschke.de/storage/kopfschmerztagebuch-usersettings-' + this.pseudonym + '/';
    const items = await this.http.get<UserSettings[]>(url).toPromise();
    if (items.length > 0) {
      this.userSettings = items[0];
    }
  }

  deletePseudonymFromLocalStorage(): void {
    localStorage.removeItem('pseudonym');
  }


}
