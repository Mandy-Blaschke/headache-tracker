import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pseudonym: string;
  alert = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  async savePseudonym(): Promise<void> {
    if (this.pseudonym != null) {
      await this.router.navigate(['uebersicht/' + this.pseudonym]);
      // TODO
    } else {
      this.alert = true;
    }
  }
}
