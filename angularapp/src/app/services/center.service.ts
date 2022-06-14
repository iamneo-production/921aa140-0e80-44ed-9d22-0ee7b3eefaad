import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../models/center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private baseURL = "http://localhost:8081/api/v1/centers";

  constructor(private httpClient: HttpClient) { }

  getCentersList(): Observable<Center[]> {
    return this.httpClient.get<Center[]>(`${this.baseURL}`);
  }

  createCenter(center: Center): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, center);
  }
   getCenterById(id: number): Observable<Center>{
     return this.httpClient.get<Center>(`${this.baseURL}/${id}`);
   }

   updateCenter(id: number, center: Center): Observable<Object>{
     return this.httpClient.put(`${this.baseURL}/${id}`, center);
   }
   deleteCenter(id: number): Observable<Object> {
     return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
