import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authors: any = [];

  author = {
    name: '',
    image: '',
    books: []
  }

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    this._httpService.getAllAuthors()
      .subscribe(data => this.authors = data);
  }

  getUpdateForm(id: any){
    this._router.navigate([`/update/${id}`]);
  }

  getBookList(id: string){
    this._router.navigate([`/books/${id}`]);
  }

  deleteAuthor(id: string){
    this._httpService.deleteAuthor(id).subscribe(() => this.getAllAuthors())
  }

}
