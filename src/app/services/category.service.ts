import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Category } from '../modules/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "https://localhost:44310/api/categories/getall"

  constructor(private httpClient:HttpClient) { }

  
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
    };
  }

