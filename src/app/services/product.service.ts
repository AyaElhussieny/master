import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }


  getProducts():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/products`);
    
  }
}
