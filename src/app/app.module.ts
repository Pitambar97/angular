import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterOutlet,RouterModule,Routes,Router} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemsComponent } from './components/product-list/product-items/product-items.component';
import { ProductDetailsComponent } from './components/product-list/product-details/product-details.component';
import { FormComponent } from './components/form/form.component';

import{ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './components/form/sign-in/sign-in.component';
import { OverlayProductDirective } from './Directive/overlay-product.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ProductCartComponent } from './components/Cart/product-cart/product-cart.component';

const routing:Routes =[
  {path:"",component:HeaderComponent },
  {path:"product-items",component:ProductItemsComponent},
  {path:"product-items/:dynamic",component:ProductDetailsComponent},
  {path:"product-cart",component:ProductCartComponent},
  {path:"Login-form",component:FormComponent},
  {path:"signin-form",component:SignInComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemsComponent,
    ProductDetailsComponent,
    FormComponent,
    SignInComponent,
    OverlayProductDirective,
    CustomPipe,
    ProductCartComponent
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routing),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
