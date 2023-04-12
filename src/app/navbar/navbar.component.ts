import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  product:any;
  productlength:number=0;
  constructor( private http:ProductserviceService)
  {}

 ngOnInit(): void {
     
 }


  num=0;
  AllPro( get:number)
  {
  this.num=get;
  }
   SerchProduct(data:any)
   {
        this.http.search(data)
      
   }
   



}
