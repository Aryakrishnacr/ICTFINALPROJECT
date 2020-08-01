import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  readonly baseURL = 'http://localhost:3000/product';
  constructor(private http: HttpClient) { }
  postproduct(product) {
    return this.http.post(this.baseURL,product);
  }

}
