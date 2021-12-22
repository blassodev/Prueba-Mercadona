import { Injectable } from '@angular/core';
import products from '../../resources/products.json';
import {Product, ProductNoId} from './product';
import {max} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = products;
  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product: ProductNoId) {
    const ids = this.products.map(p=>p.id);
    const id = Math.max(...ids);
    this.products = [...this.products, {...product,id: (id+1)}];
  }

  updateProduct(id: number, product: ProductNoId){
    this.products = this.products.map(prod=>{
      if (prod.id===id){
        return {...product,id};
      }else{
        return prod;
      }
    });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product=>product.id!==id);
  }
}
