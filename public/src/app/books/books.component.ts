import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  author: any = {
    name: String,
    image: String,
    books: []
  };
  book: any;
  books: any = [];

  formType: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAuthorById();
    this.book = {title: '', genre: '', publication_year: '', summery: '', cover: ''}
  }

  getAuthorById(){
    this._route.params.subscribe((params: Params)=> {      
      this._httpService.getAuthorById(params['id']).subscribe(data => {
        this.author = data[0];
      })
    })    
  }

  addBookInfo(id: string){
    this._httpService.updateAuthorBooks(id, this.book)
      .subscribe(data => {
        this.book = {_id: '', title: '', genre: '', publication_year: '', summery: '', cover: ''}
        this.getAuthorById();
      })
  }

  getBooksInfoUpdateForm(auth_id: string, index: Number){
    this.formType = true;
    this._httpService.getAuthorById(auth_id)
      .subscribe(data => {
        this.book = data[0]['books'][index];     
      })
  }

  updateBookInfo(auth_id: string, book_id: string){
    this._httpService.updateBookInfo(auth_id, book_id, this.book)
      .subscribe(() => {
        this.book = {title: '', genre: '', publication_year: '', summery: '', cover: ''}
        this.getAuthorById();
      })
  }
}
