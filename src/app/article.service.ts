import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8089/api/v1/Article/';

  constructor(private http : HttpClient) { 
  }
 // getArticleList(): Observable<Article[]> {
  //  return this.http.get<Article[]>(`${this.baseUrl}`);
 // }
  getArticleList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  createArticle(article: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}save`, article);
  }

  deleteArticle(numArticle: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${numArticle}`);
  }

  updateArticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, value);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}chercher/${id}`);
  }
}