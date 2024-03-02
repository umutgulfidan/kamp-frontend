import { Injectable } from '@angular/core';
import { LoginModel } from '../modules/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../modules/tokenModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44310/api/auth/";

  login(loginModel:LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel)
  }

}
