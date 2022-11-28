import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListPage } from "./books.module/pages/books-list.page";
import { BookProfilePage } from "./books.module/pages/book-profile.page";

const routes: Routes = [
  { path: '', component: BooksListPage },
  { path: 'book', component: BookProfilePage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
