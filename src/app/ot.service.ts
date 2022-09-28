import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtService {
  private baseUrl = 'http://localhost:8089/api/v1/OrodreTraveaux/';

  constructor(private http : HttpClient) { 
  }
  getOrdreTraveauxtList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
