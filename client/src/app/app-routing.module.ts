import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductComponent}from './product/product.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: 'products' , component: ProductComponent },
 
  { path: 'productlist' , component: ProductlistComponent,
children:[
  {path:'addproduct',component:AddproductComponent},
  { path: '',redirectTo: 'productlist', pathMatch:'full' }
] },
  { path: 'mycart' , component: MycartComponent },
  { path: '' , component:HomeComponent },
  { path: '',redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AddproductComponent
]