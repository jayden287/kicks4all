import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LowCutComponent } from './low-cut/low-cut.component';
import { MidCutComponent } from './mid-cut/mid-cut.component';
import { HighCutComponent } from './high-cut/high-cut.component';
import { SalesComponent } from './sales/sales.component';
import { SearchComponent } from './search/search.component';

import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { UaComponent } from './ua/ua.component';
import { PumaComponent } from './puma/puma.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';

import { PinkComponent } from './pink/pink.component';
import { WhiteComponent } from './white/white.component';
import { BlueComponent } from './blue/blue.component';
import { PurpleComponent } from './purple/purple.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './authenication/register/register.component';
import { LoginComponent } from './authenication/login/login.component';
import { LogoutComponent } from './authenication/logout/logout.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  //redirect to home page on load
  { path: '', component: HomeComponent, pathMatch: 'full'},

  { path: 'about', component: AboutComponent},
  //redirect to about page on load


  
  { path: 'lowCut', component: LowCutComponent},
  //redirect to signup page on load
  {path: '', component: LowCutComponent, pathMatch: 'full'},
  { path: 'midCut', component: MidCutComponent},
  //redirect to signup page on load
  {path: '', component: MidCutComponent, pathMatch: 'full'},

  { path: 'highCut', component: HighCutComponent},
  //redirect to signup page on load
  {path: '', component: HighCutComponent, pathMatch: 'full'},

  { path: 'sales', component: SalesComponent},
  //redirect to signup page on load
  {path: '', component: SalesComponent, pathMatch: 'full'},
  
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["user"]}}},
  //redirect to signup page on load
  {path: '', component: SearchComponent, pathMatch: 'full'},
  
  
  { path: 'nike', component: NikeComponent},
  //redirect to signup page on load
  {path: '', component: NikeComponent, pathMatch: 'full'},
  
  { path: 'adidas', component: AdidasComponent},
  //redirect to signup page on load
  {path: '', component: AdidasComponent, pathMatch: 'full'},

  { path: 'ua', component: UaComponent},
  //redirect to signup page on load
  {path: '', component: UaComponent, pathMatch: 'full'},

  { path: 'puma', component: PumaComponent},
  //redirect to signup page on load
  {path: '', component: PumaComponent, pathMatch: 'full'},

  { path: 'shoeDetails/:id', component: ShoeDetailsComponent},
  //redirect to signup page on load
  {path: '', component: ShoeDetailsComponent, pathMatch: 'full'},
  
  { path: 'contact', component: ContactComponent},
  //redirect to signup page on load
  {path: '', component: ContactComponent, pathMatch: 'full'},

  { path: 'displayContact', component: DisplayContactComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["admin"]}}},
  //redirect to signup page on load
  {path: '', component: DisplayContactComponent, pathMatch: 'full'},

 
  { path: 'pink', component: PinkComponent},
  //redirect to signup page on load
  {path: '', component: PinkComponent, pathMatch: 'full'},

  { path: 'white', component: WhiteComponent},
  //redirect to signup page on load
  {path: '', component: WhiteComponent, pathMatch: 'full'},

  { path: 'blue', component: BlueComponent},
  //redirect to signup page on load
  {path: '', component: BlueComponent, pathMatch: 'full'},

  { path: 'purple', component: PurpleComponent},
  //redirect to signup page on load
  {path: '', component: PurpleComponent, pathMatch: 'full'},
  
  { path: 'cart', component: CartComponent},
  //redirect to signup page on load
  {path: '', component: CartComponent, pathMatch: 'full'},
  
  { path: 'shipping', component: ShippingComponent},
  //redirect to signup page on load
  {path: '', component: ShippingComponent, pathMatch: 'full'},
  
  { path: 'payment', component: PaymentComponent},
  //redirect to signup page on load
  {path: '', component: PaymentComponent, pathMatch: 'full'},
  
  { path: 'test', component: TestComponent, canActivate: [AuthGuard], data:
  {permission: {only: ["admin"]}}},
  //redirect to signup page on load
  {path: '', component: TestComponent, pathMatch: 'full'},
  
  { path: 'register', component: RegisterComponent},

  
  { path: 'login', component: LoginComponent},
  //redirect to signup page on load
  
  { path: 'logout', component: LogoutComponent},
  //redirect to signup page on load
  
  //{ path: 'user', component: UserComponent, canActivate: [AuthGuard], data:
  //{permission: {only: ["user", "admin"]}}},
  //redirect to signup page on load
  

  
  
  








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
