import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { LowCutComponent } from './low-cut/low-cut.component';
import { MidCutComponent } from './mid-cut/mid-cut.component';
import { HighCutComponent } from './high-cut/high-cut.component';
import { SalesComponent } from './sales/sales.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ShoesService } from './shoes.service';
import { CallbackPipe } from './callback.pipe';
import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { UaComponent } from './ua/ua.component';
import { PumaComponent } from './puma/puma.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { PriceLowComponent } from './price-low/price-low.component';
import { PriceHighComponent } from './price-high/price-high.component';
import { PinkComponent } from './pink/pink.component';
import { BlueComponent } from './blue/blue.component';
import { WhiteComponent } from './white/white.component';
import { PurpleComponent } from './purple/purple.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './authenication/register/register.component';
import { LoginComponent } from './authenication/login/login.component';
import { LogoutComponent } from './authenication/logout/logout.component';
import { UserComponent } from './authenication/user/user.component';
import { AdminComponent } from './authenication/admin/admin.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserserviceService } from './userservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LowCutComponent,
    MidCutComponent,
    HighCutComponent,
    SalesComponent,
    FilterPipe,
    SearchComponent,
    CallbackPipe,
    NikeComponent,
    AdidasComponent,
    UaComponent,
    PumaComponent,
    ShoeDetailsComponent,
    ContactComponent,
    DisplayContactComponent,
    PriceLowComponent,
    PriceHighComponent,
    PinkComponent,
    BlueComponent,
    WhiteComponent,
    PurpleComponent,
    CartComponent,
    ShippingComponent,
    PaymentComponent,
    TestComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },

      { path: 'about', component: AboutComponent},
      //redirect to about page on load
      { path: '', component: AboutComponent, pathMatch: 'full'},
    
    
      
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
      
      { path: 'search', component: SearchComponent},
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
    
      { path: 'lowPrice', component: PriceLowComponent},
      //redirect to signup page on load
      {path: '', component: PriceLowComponent, pathMatch: 'full'},
    
      { path: 'highPrice', component: PriceHighComponent},
      //redirect to signup page on load
      {path: '', component: PriceHighComponent, pathMatch: 'full'},
    
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
      
      { path: 'test', component: TestComponent},
      //redirect to signup page on load
      {path: '', component: TestComponent, pathMatch: 'full'},
      
      { path: 'register', component: RegisterComponent},
    
      
      { path: 'login', component: LoginComponent},
      //redirect to signup page on load
      
      { path: 'logout', component: LogoutComponent},
      //redirect to signup page on load
      
      { path: 'user', component: UserComponent, canActivate: [AuthGuard], data:
      {permission: {only: ["user", "admin"]}}},
      //redirect to signup page on load
      
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data:
      {permission: {only: ["admin"]}}},
      //redirect to signup page on load
      {path: '', component: LoginComponent, pathMatch: 'full'},
    
    ])
    
    
  ],
  providers: [ ShoesService, ContactService, AuthService, UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
