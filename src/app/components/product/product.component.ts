import { Component } from '@angular/core';
import { Product } from '../../modules/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products :Product[] = []

}
