import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pseudonym = undefined;
  noName = false;
  wrongName = false;

  constructor(private router: Router, private service: MainService) {
  }

  async ngOnInit(): Promise<void> {
    this.service.pseudonym = await localStorage.getItem('pseudonym');
  }

  async login(): Promise<void> {
    if (this.pseudonym != null) {
      const reg = /^[a-z0-9]+$/gi;

      if (reg.test(this.pseudonym.toLowerCase())) {
        localStorage.setItem('pseudonym', this.pseudonym);
        await this.router.navigate(['neuer-eintrag']);
        this.service.pseudonym = this.pseudonym;

      } else {
        this.wrongName = true;
        this.noName = false;
      }

    } else {
      this.noName = true;
      this.wrongName = false;
    }
  }
}
