import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  product:any;
  public productList:any;
  searchString='';
constructor( private http:ProductserviceService)
{
   this.http.getProduct().subscribe(res => {
this.productList=res
   })
}
postData(product:any)
{
  this.http.postData(product).subscribe(res =>{
    
    Swal.fire("Thank You....",'You Add Sucessfully..','success')



  
})
}
ngOnInit(): void {
    this.http.searchdata.subscribe(res =>{

      this.searchString=res;
    })
}


}
