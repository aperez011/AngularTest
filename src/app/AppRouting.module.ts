import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./components/layout/layout.component";
import { TextComponent } from "./components/text/text.component";
import { AddInfoComponent } from "./components/add-info/add-info.component";
import { TableFilterComponent } from "./components/table-filter/table-filter.component";
import { HomeButtonComponent } from "./components/home-button/home-button.component";

const routes: Routes = [
    {path: '', component: TextComponent},
    {
        path: 'principal',
        loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)
    },
    // {path: 'Home', component: LayoutComponent},
   
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class RoutingModule {}