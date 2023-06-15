import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TextComponent } from './components/text/text.component';
import { AddInfoComponent } from './components/add-info/add-info.component';
import { RoutingModule } from './AppRouting.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './components/core/core.module';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
