import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductsService} from '../products.service';
import {Product} from '../product';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss'],
})
export class EditProductModalComponent implements OnInit{
  @Input() product: Product;
  editProductForm: FormGroup;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    public modalController: ModalController
  ) {
    this.editProductForm = this.formBuilder.group({
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
    const {url, nombre, descripcion, precio} = this.editProductForm.value;
    this.productsService.updateProduct(
      this.product.id ,
      {
        img: url,
        nombre,
        descripcion,
        precio
      }
    );
    this.modalController.dismiss();
  }

  ngOnInit() {
    console.log(this.product);
    this.editProductForm.controls.url.setValue(this.product.img);
    this.editProductForm.controls.nombre.setValue(this.product.nombre);
    this.editProductForm.controls.descripcion.setValue(this.product.descripcion);
    this.editProductForm.controls.precio.setValue(this.product.precio);
  }

}
