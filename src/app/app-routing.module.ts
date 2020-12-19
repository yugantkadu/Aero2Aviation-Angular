import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminComponent } from './auth/admin/admin.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { VehicleBrandDetailsComponent } from './homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.component';
import { VehicleCategoryDetailsComponent } from './homepage/non-authenticated/vehicle-category-details/vehicle-category-details.component';
import { VehicleLandingPageComponent } from './homepage/non-authenticated/vehicle-landing-page/vehicle-landing-page.component';
import { VehicleLandingPageComponent as LandingPageComponent} from './homepage/authenticated/vehicle-landing-page/vehicle-landing-page.component';
import { UserProfileComponent } from './homepage/authenticated/user-profile/user-profile.component';
import { VehicleAddComponent } from './homepage/authenticated/vehicle-add/vehicle-add.component';
import { VehicleReceiptComponent } from './homepage/authenticated/vehicle-receipt/vehicle-receipt.component';

const routes: Routes = [
  {path: '', component: VehicleLandingPageComponent},
  {path: 'user-landing-page', component: LandingPageComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-add-product', component: VehicleAddComponent},
  {path: 'vehicle-category', component: VehicleCategoryDetailsComponent},
  {path: 'vehicle-brand', component: VehicleBrandDetailsComponent},
  {path: 'vehicle-receipt', component: VehicleReceiptComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-register', component: UserRegistrationComponent},
  {path: 'admin/:routeName', component: AdminComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
