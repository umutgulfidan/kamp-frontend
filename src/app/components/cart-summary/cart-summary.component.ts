import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../modules/cartItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../modules/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[]
  constructor(private cartService:CartService,private toastrService:ToastrService) {
  }
  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.cartItems = this.cartService.list()
  }
  removeFromCart(product:Product){
    this.cartService.removeToCart(product)
    this.toastrService.error("Ürün Sepetinizden Silindi",product.productName)
  }
}
