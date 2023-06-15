import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AddInfoComponent } from '../add-info/add-info.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { TableFilterComponent } from '../table-filter/table-filter.component';
import { TextComponent } from '../text/text.component';

const routes: Routes = [
  {
    path: 'main/:titulo',
    component: MainComponent
  },
  {path: 'Text', component: TextComponent},
  {path: 'HomeButton', component: HomeButtonComponent},
  {path: 'TableFilter', component: TableFilterComponent},
  {path: 'AddInfo', component: AddInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
