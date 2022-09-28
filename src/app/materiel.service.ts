import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private baseUrl = 'http://localhost:8089/api/v1/Materiel/';

  constructor(private http : HttpClient) { 
  }
  getMaterielList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  createMateriel(materiel: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}save`, materiel);
  }

  deletemateriel(id:any): Observable<Object> {
    return this.http.delete(`${this.baseUrl}delete/${id}`);
  }

  updatemateriel(id:number, value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`,value);
  }

  getMateriel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}chercher/${id}`);
  }
}
