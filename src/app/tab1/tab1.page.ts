import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {InfoModalComponent} from '../info-modal/info-modal.component';
import {ProductsService} from '../products.service';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';

@Component({
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public modalController: ModalController,
    public productsService: ProductsService
  ) {}

  async presentModal(product) {
    const modal = await this.modalController.create({
      component: InfoModalComponent,
      cssClass: 'infoModal',
      componentProps: {
        product,
      }
    });
    return await modal.present();
  }

  async addProduct() {
    const modal = await this.modalController.create({
      component: AddProductModalComponent,
      cssClass: 'addModal',
    });
    return await modal.present();
  }

}
