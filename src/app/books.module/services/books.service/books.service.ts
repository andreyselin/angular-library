import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { bookApiPaths } from "./books.constants";
import { prepareQueryUrl } from "../../../utils/prepareQueryUrl";
import { GetBookListRawParams, GetBooksListResponse } from "./books.types";

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooksList(params: GetBookListRawParams) {

    const preparedParams = {
      q: params.q,
      fields: params.fields.length ? params.fields.join(",") : "*",
    };

    return this.http.get<GetBooksListResponse>(prepareQueryUrl(bookApiPaths.list, preparedParams));
  }
}
