import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import{Routes, RouterModule} from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component'
import{FormsModule} from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component'
import { ReactiveFormsModule } from '@angular/forms'; 
import { UserServiceService } from './services/user-service.service';
import { SampleFormComponent } from './sample-form/sample-form/sample-form.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
const appRoutes:Routes=[
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path:'user/Login', component:UserLoginComponent},
  {path:'user/Register', component:UserRegisterComponent},
  {path:'sample-form', component:SampleFormComponent},
  {path: '**', component: PropertyListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [HousingService, UserServiceService, AlertifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
