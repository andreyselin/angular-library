import { Component } from '@angular/core';
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  constructor(private booksService: BooksService) {}

  fetchList() {
    this.booksService.getBooksList({
      q: this.queryString,
      fields: this.fields,
    })
      .subscribe(data => {
        this.list = data.docs;
        this.start = data.start;
        this.offset = data.offset;
      });
  }

  ngOnInit() {
    this.fetchList();
  }

  queryString: string = 'Harry';
  fields: string[] = ['title'];

  list: unknown[] = [];
  start: number = 0;
  offset: number = 0;
}
