import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { Routes, RouterModule } from '@angular/router';
 import {routingComponents} from '../app-routing.module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  title:String="Product List";
  products:ProductModel[];
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  addproduct(){
  this.router.navigate(['addproduct'],{relativeTo:this.route});
  
  }
}
