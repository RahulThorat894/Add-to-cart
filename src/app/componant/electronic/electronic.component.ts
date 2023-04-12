import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent {

   eleproductlist:any;
  constructor(private http:ProductserviceService){

  

  }





}
