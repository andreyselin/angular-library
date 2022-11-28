export type GetBookListRawParams = {
  q?: string;
  fields: string[];
};

export type GetBooksListResponse = {
  docs: unknown[];
  start: number;
  offset: number;
};
