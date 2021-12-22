import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-product-card',
  templateUrl: './add-product-card.component.html',
  styleUrls: ['./add-product-card.component.scss'],
})
export class AddProductCardComponent implements OnInit {
  @Output() addProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
