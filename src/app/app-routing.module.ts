import { NgModule } from '@angular/core';
import { ErrorPageComponent } from '@pages/index';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'we', pathMatch: 'full' },
  { path: 'we', loadChildren: () => import('@modules/landlord/landlord.module').then(m => m.LandlordModule), data: { module: "landlord", action: "load" } },
  { path: '**', component: ErrorPageComponent, data: { page: 'error', statusCode: 404 } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
