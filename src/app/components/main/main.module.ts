import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AddInfoComponent } from '../add-info/add-info.component';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { TableFilterComponent } from '../table-filter/table-filter.component';
import { TextComponent } from '../text/text.component';
import { CoreModule } from '../core/core.module';
import { CreateUpdateContactComponent } from '../table-filter/create-update-contact/create-update-contact.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeButtonComponent,
    TableFilterComponent,
    CreateUpdateContactComponent,
    TextComponent,  
    AddInfoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,CoreModule
  ]
})
export class MainModule { }
