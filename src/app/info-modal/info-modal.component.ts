import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';
import {ModalController} from '@ionic/angular';
import {EditProductModalComponent} from '../edit-product-modal/edit-product-modal.component';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {
  @Input() product: Product;
  @Input() close: () => void;

  constructor(
    private productsService: ProductsService,
    public modalController: ModalController) {
  }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
  }

  eliminar(id: number){
    this.productsService.deleteProduct(id);
    this.dismissModal();
  }

  async editar(){
    this.dismissModal();
    await this.presentEditModal();
  }

  async presentEditModal() {
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      cssClass: 'editModal',
      componentProps: {
        product: this.product,
      }
    });
    return await modal.present();
  }
}
