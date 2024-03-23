export interface IListCommentsQueryParams {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string; // ISO8601 date format
  author?: number | number[];
  author_exclude?: number | number[];
  author_email?: string;
  before?: string; // ISO8601 date format
  exclude?: number | number[];
  include?: number | number[];
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
  parent?: number | number[];
  parent_exclude?: number | number[];
  post?: number | number[];
  status?: string; // Requires authorization, default: 'approve'
  type?: string; // Requires authorization, default: 'comment'
  password?: string; // For password-protected posts
}
