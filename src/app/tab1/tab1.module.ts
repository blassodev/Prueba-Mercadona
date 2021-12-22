import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {Tab1PageRoutingModule} from './tab1-routing.module';
import {ProductComponent} from '../product/product.component';
import {AddProductCardComponent} from '../add-product-card/add-product-card.component';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';
import {EditProductModalComponent} from '../edit-product-modal/edit-product-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab1Page, ProductComponent, AddProductCardComponent, AddProductModalComponent, EditProductModalComponent]
})
export class Tab1PageModule {
}
