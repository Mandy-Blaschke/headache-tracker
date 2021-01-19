import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { OverviewComponent } from './overview/overview.component';
import {FormsModule} from '@angular/forms';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    OverviewComponent,
    EntryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
