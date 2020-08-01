import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:String="Product List";
  products:ProductModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
