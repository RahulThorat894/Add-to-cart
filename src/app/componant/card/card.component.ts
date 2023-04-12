import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
   AllProdyct:any
  constructor(private http:ProductserviceService)
  {

    
  }
  deleData(id:any)
  {
     this.http.delete(id).subscribe(res=>{
     
      Swal.fire("Deleted","Your file Has been Delted",'success').then (function(){
        location.reload();
      })

    })
}
  ngOnInit(): void {
    this.http.getProduct1().subscribe(res=>{
      this.AllProdyct=res;
      console.log(this.AllProdyct)
    })
  }
  Palce()
  {
    Swal.fire("Add")
  }
  

  


}
