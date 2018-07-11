import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'offer' },
  { path: 'offer', component: OfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
