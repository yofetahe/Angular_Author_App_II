import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get('/api/authors');
  }

  getAuthorById(id: string){
    return this._http.get(`/api/authors/${id}`);
  }

  addAuthor(data: any){
    return this._http.post('/api/authors', data);
  }

  updateAuthor(id: string, data: any){
    return this._http.put(`/api/authors/${id}`, data);
  }

  updateBookInfo(auth_id: string, book_id: string, data: any){
    return this._http.put(`/api/authors/books/${auth_id}/${book_id}`, data);
  }

  updateAuthorBooks(id: string, data: any){    
    return this._http.put(`/api/authors/books/${id}`, data);
  }

  deleteAuthor(id: string){
    return this._http.delete(`/api/authors/${id}`);
  }
}
