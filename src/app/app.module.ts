import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FormComponent} from './form/form.component';
import {OverviewComponent} from './overview/overview.component';
import {FormsModule} from '@angular/forms';
import {EntryComponent} from './entry/entry.component';
import {EditComponent} from './edit/edit.component';
import {LoginComponent} from './login/login.component';
import {ButtonComponent} from './button/button.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    OverviewComponent,
    EntryComponent,
    EditComponent,
    LoginComponent,
    ButtonComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
