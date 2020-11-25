import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { VehicleBrandDetailsComponent } from './homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.component';
import { VehicleCategoryDetailsComponent } from './homepage/non-authenticated/vehicle-category-details/vehicle-category-details.component';
import { VehicleLandingPageComponent } from './homepage/non-authenticated/vehicle-landing-page/vehicle-landing-page.component';

const routes: Routes = [
  {path: '', component: VehicleLandingPageComponent},
  {path: 'vehicle-category', component: VehicleCategoryDetailsComponent},
  {path: 'vehicle-brand', component: VehicleBrandDetailsComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-register', component: UserRegistrationComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
