import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private productUrlApi = 'http://127.0.0.1:8000/api/products';

  product: Product = new Product();
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrlApi);
  }


  getProduct(id: number) {
    const url = `${this.productUrlApi}/${id}`;
    return this.http.get<Product>(url);

  }
  deleteProduct(product: Product) {
    const url = `${this.productUrlApi}/${product.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    }
    return this.http.delete<Product>(url, httpOptions);
  }

  upDateProduct(product: Product) {
    const url = `${this.productUrlApi}/${product.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    }
    return this.http.put<Product>(url, httpOptions);
  }

  addProduct(product: Product) {
    const url = `${this.productUrlApi}/${product.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    }
    return this.http.post<Product>(url, httpOptions);
  }
}
