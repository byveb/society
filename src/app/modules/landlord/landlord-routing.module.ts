import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "@layouts/index";
import { CalendarComponent, ContactsPageComponent, DashboardPageComponent, ErrorPageComponent, ListingPageComponent, MaintenancePageComponent, PropertyPageComponent, PropertyUnitPageComponent, ReportsPageComponent, StaffsPageComponent, TransactionsPageComponent } from "@pages/index";

const routes: Routes = [
    {
        path: '', component: DefaultLayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'staffs', component: StaffsPageComponent },
            { path: 'calendar', component: CalendarComponent },
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
            { path: 'error', component: ErrorPageComponent, data: { page: 'error', module: "landloard" } },
            { path: '**', component: ErrorPageComponent, data: { module: "landloard", page: 'error-404', layout: 'default' } }
        ], data: { module: "landloard", layout: 'default', component: 'defaultlayoutcomponent' }
    },
    { path: 'error', component: ErrorPageComponent, data: { page: 'error', module: "landloard" } },
    { path: '**', component: ErrorPageComponent, data: { page: 'error-404', module: "landloard" } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandlordRoutingModule { }
