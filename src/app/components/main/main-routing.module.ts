import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AddInfoComponent } from '../add-info/add-info.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { TableFilterComponent } from '../table-filter/table-filter.component';
import { TextComponent } from '../text/text.component';
import { CreateUpdateContactComponent } from '../table-filter/create-update-contact/create-update-contact.component';

const routes: Routes = [
  {
    path: 'main/:titulo',
    component: MainComponent
  },
  {path: 'Text', component: TextComponent},
  {path: 'HomeButton', component: HomeButtonComponent},
  {path: 'TableFilter', component: TableFilterComponent},
  {path: 'create-contact', component: CreateUpdateContactComponent},
  {path: 'AddInfo', component: AddInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
