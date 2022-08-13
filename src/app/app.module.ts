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
    
    
  ],
  providers: [ ShoesService, ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
