import { Component } from '@angular/core';

import { PRODUCTS } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = PRODUCTS;

  share(product) {
    const url: string = window.location.href;
    window.open(`https://telegram.me/share/url?url=${ product.link }&text=Хэй, ты только посмотри на  ${ product.name }`);

  }
}

