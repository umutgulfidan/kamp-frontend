import { Component, OnInit } from '@angular/core';
import { Product } from '../../modules/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products :Product[] = []
  dataLoaded:boolean = false;

  constructor(private productService:ProductService){
  
  }
    
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>[
      this.products=response.data,
      this.dataLoaded = true
    ]);
    console.log();
  }

}
