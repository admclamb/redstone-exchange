export interface PaginationResponse<T> {
  results: T[];
  page: number;
  size: number;
  totalPages: number;
  isEnd: boolean;
  total: number;
}
