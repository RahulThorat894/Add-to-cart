import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent {

  jewleryList:any;
constructor( private http:ProductserviceService)
{
  this.http.getJewellery().subscribe(res => {
    this.jewleryList=res;

  })
}

}
