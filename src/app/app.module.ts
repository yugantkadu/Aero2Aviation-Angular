import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { VehicleCategoryDetailsComponent } from './homepage/non-authenticated/vehicle-category-details/vehicle-category-details.component';
import { VehicleBrandDetailsComponent } from './homepage/non-authenticated/vehicle-brand-details/vehicle-brand-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VehicleLandingPageComponent } from './homepage/non-authenticated/vehicle-landing-page/vehicle-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    VehicleCategoryDetailsComponent,
    VehicleBrandDetailsComponent,
    HeaderComponent,
    FooterComponent,
    VehicleLandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
