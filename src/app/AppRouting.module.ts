import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./components/layout/layout.component";
import { TextComponent } from "./components/text/text.component";
import { AddInfoComponent } from "./components/add-info/add-info.component";
import { TableFilterComponent } from "./components/table-filter/table-filter.component";
import { HomeButtonComponent } from "./components/home-button/home-button.component";

const routes: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'Home', component: LayoutComponent},
    {path: 'Text', component: TextComponent},
    {path: 'HomeButton', component: HomeButtonComponent},
    {path: 'TableFilter', component: TableFilterComponent},
    {path: 'AddInfo', component: AddInfoComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class RoutingModule {}