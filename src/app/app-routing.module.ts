import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './componant/all-product/all-product.component';
import { CardComponent } from './componant/card/card.component';

const routes: Routes = [

  
  {
    path:'',
    component:AllProductComponent
  },
  {
    path:'card',
    component:CardComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
