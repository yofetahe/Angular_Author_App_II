import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent implements OnInit {

  author_id: string;

  author: any = {    
    name: '',
    image: ''
  };

  errorMessage: any = {
    name: '',
    image: ''
  };

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.author_id = params['id'];
      this.getAuthorById(this.author_id);
    })
  }

  getAuthorById(id: string){
    this._http.getAuthorById(id).subscribe(data => {
      this.author = { 
        id: data[0]['_id'], 
        name: data[0]['name'], 
        image: data[0]['image'] 
      }
    });
  }

  updateAuthorInfo(){

    this.errorMessage = { name: '', image: '' };
    
    this._http.updateAuthor(this.author_id, this.author).subscribe(data => {      
      if(data['errors']){
        if(data['errors']['name'])
          this.errorMessage.name = data['errors']['name']['message']
        if(data['errors']['image'])
          this.errorMessage.image = data['errors']['image']['message']
      } else {
        this._router.navigate(['/list']);
      }
    });
  }

  cancelAuthorAdding(){
    this._router.navigate(['/list']);
  }
}
