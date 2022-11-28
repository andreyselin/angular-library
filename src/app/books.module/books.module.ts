import { NgModule } from '@angular/core';

import { BooksListComponent } from "./features/books-list.component";
import { BookProfileComponent } from "./features/book-profile.component";

import { BookProfilePage } from "./pages/book-profile.page";
import { BooksListPage } from "./pages/books-list.page";

import { BooksService } from "./services/books.service";

@NgModule({
  declarations: [
    BookProfilePage,
    BooksListPage,
    BooksListComponent,
    BookProfileComponent,
  ],
  imports: [],
  providers: [
    BooksService,
  ],
})
export class BooksModule { }
