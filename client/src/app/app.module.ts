import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ProductComponent}from'./product/product.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    MycartComponent,
    AdminproductComponent,
    ProductlistComponent,
    AddproductComponent
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
