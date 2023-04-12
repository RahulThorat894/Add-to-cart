import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './componant/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './componant/all-product/all-product.component';
import { ElectronicComponent } from './componant/electronic/electronic.component';
// import { FashionComponent } from './component/fashion/fashion.component';
import { JewelleryComponent } from './componant/jewellery/jewellery.component';
import { FashionComponent } from './componant/fashion/fashion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './componant/card/card.component';
import { SearchPipe } from './search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllProductComponent,
    ElectronicComponent,
    FashionComponent,
    JewelleryComponent,
    CardComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
