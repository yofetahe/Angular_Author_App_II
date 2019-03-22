import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: AuthorsListComponent },
  { path: 'list', component: AuthorsListComponent },
  { path: 'create', component: AuthorCreateComponent },
  { path: 'update/:id', component: AuthorUpdateComponent },
  { path: 'books/:id', component: BooksComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
