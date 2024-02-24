import { Component, OnInit } from '@angular/core';
import { Product } from '../../modules/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products :Product[] = []
  dataLoaded:boolean = false;
  filterText:string="";

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService){
  
  }
    
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>[
      this.products=response.data,
      this.dataLoaded = true
    ]);
    console.log();
  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>[
      this.products=response.data,
      this.dataLoaded = true
    ]);
    console.log();
  }


  addToCart(product:Product){
      this.cartService.addToCart(product)
      this.toastrService.success("Sepete Eklendi",product.productName)
      console.log(product)
  }

}
