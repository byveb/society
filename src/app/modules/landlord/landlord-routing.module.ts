import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "@layouts/index";
import { ContactsPageComponent, DashboardPageComponent, ErrorPageComponent, ListingPageComponent, MaintenancePageComponent, PropertyPageComponent, PropertyUnitPageComponent, ReportsPageComponent, StaffsPageComponent, TransactionsPageComponent } from "@pages/index";

const routes: Routes = [
    {
        path: '', component: DefaultLayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'staffs', component: StaffsPageComponent },
            { path: 'reports', component: ReportsPageComponent },
            { path: 'dashboard', component: DashboardPageComponent },
            { path: 'contacts/tenants', component: ContactsPageComponent },
            { path: 'contacts/services', component: ContactsPageComponent },

            { path: 'property/listings', component: ListingPageComponent },
            { path: 'property/inquiries', component: ListingPageComponent },
            { path: 'maintenance/requests', component: MaintenancePageComponent },
            { path: 'maintenance/reminders', component: MaintenancePageComponent },

            { path: 'properties/all', component: PropertyPageComponent },
            { path: 'properties/units', component: PropertyUnitPageComponent },
            { path: 'accounting/balances', component: TransactionsPageComponent },
            { path: 'accounting/recurring', component: TransactionsPageComponent },
            { path: 'accounting/transactions', component: TransactionsPageComponent },
            { path: '**', component: ErrorPageComponent, data: { module: "landloard", page: 'error', layout: 'default' } }
        ], data: { module: "landloard", layout: 'default', component: 'defaultlayoutcomponent' }
    },
    { path: '**', component: ErrorPageComponent, data: { page: 'error', module: "landloard" } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandlordRoutingModule { }
