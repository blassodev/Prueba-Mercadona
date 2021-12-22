import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductsService} from '../products.service';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
addProductForm: FormGroup;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    public modalController: ModalController
  ) {
    this.addProductForm = this.formBuilder.group({
      url: [''],
      nombre: [''],
      descripcion: [''],
      precio: ['']
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  submit(){
    const {url, nombre, descripcion, precio} = this.addProductForm.value;
    this.productsService.addProduct(
      {
        img: url,
        nombre,
        descripcion,
        precio
      }
    );
    this.dismissModal();
  }
}
