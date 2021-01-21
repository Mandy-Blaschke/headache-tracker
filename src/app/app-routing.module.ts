import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {FormComponent} from './form/form.component';
import {EntryComponent} from './entry/entry.component';
import {EditComponent} from './edit/edit.component';
import {SettingsComponent} from './settings/settings.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/uebersicht'},
  {path: 'uebersicht', component: OverviewComponent},
  {path: 'einstellungen', component: SettingsComponent},
  {path: 'neuer-eintrag', component: FormComponent},
  {path: 'eintrag/:datum', component: EntryComponent},
  {path: 'eintrag/:datum/:zeit/:bearbeiten', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
