import { NgModule } from '@angular/core';

import { BooksListComponent } from "./components/books-list.component";
import { BookProfileComponent } from "./components/book-profile.component";

@NgModule({
  declarations: [
    BooksListComponent,
    BookProfileComponent,
  ],
  imports: [],
  providers: [],
})
export class BooksModule { }
