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
  alert = false;

  constructor(private router: Router, private service: MainService) {
  }

  ngOnInit(): void {
  }

  async login(): Promise<void> {
    if (this.pseudonym != null) {
      await this.router.navigate(['neuer-eintrag']);
      this.service.pseudonym = this.pseudonym;
    } else {
      this.alert = true;
    }
  }
}
