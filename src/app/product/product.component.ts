import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() imageSrc: string;
  @Output() info = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


}
