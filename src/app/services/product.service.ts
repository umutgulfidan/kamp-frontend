import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44310/api/"

  constructor(private httpClient:HttpClient) { }

  
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
    };

    getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
      let newPath = this.apiUrl +"products/getbycategory?categoryId=" +categoryId
      return this.httpClient.get<ListResponseModel<Product>>(newPath)
    }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }

}

