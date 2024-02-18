import { Component, OnInit } from '@angular/core';
import { Product } from '../../modules/product';
import { ProductResponseModule } from '../../modules/productResponseModule';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products :Product[] = []
  apiUrl = "https://localhost:44310/api/products/getall"

  constructor(private httpClient:HttpClient){
  
  }
    
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProductResponseModule>(this.apiUrl).subscribe((response)=> {
      this.products = response.data
    });
  }

}
