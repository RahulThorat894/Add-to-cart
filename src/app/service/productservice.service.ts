import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor( private http:HttpClient) { }

  getProduct()
  {
    return this.http.get<any>("http://localhost:3000/Product");
  }
  getJewellery()
  {
    return this.http.get<any>("https://fakestoreapi.com/products/category/jewelery");
  }
  postData(product:any)
  {
    return this.http.post("http://localhost:3000/cart/",product);
  }
  getProduct1()
  {
    return this.http.get<any>("http://localhost:3000/cart");
  }
  delete(id:any)
  {
    return this.http.delete(`http://localhost:3000/cart/${id}`)
  }
  public searchdata=new Subject<any>;

  search(data:any)
  {
    this.searchdata.next(data);
  
  }
}