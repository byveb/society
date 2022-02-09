import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "@layouts/index";
import { DashboardPageComponent, ErrorPageComponent } from "@pages/index";

const routes: Routes = [
    {
        path: '', component: DefaultLayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardPageComponent },
            { path: '**', component: ErrorPageComponent, data: { module: "landloard", page: 'error', layout: 'default' } }
        ]
    },
    { path: '**', component: ErrorPageComponent, data: { page: 'error', module: "landloard" } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandlordRoutingModule { }
