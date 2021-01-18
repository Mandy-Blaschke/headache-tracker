import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {FormComponent} from './form/form.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'neuer-eintrag'},
  {path: 'übersicht', component: OverviewComponent},
  {path: 'neuer-eintrag', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
