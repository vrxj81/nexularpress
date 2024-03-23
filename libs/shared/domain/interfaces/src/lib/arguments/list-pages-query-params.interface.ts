export interface IListPagesQueryParams {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string; // ISO8601 date format
  modified_after?: string; // ISO8601 date format
  author?: number | number[];
  author_exclude?: number | number[];
  before?: string; // ISO8601 date format
  modified_before?: string; // ISO8601 date format
  exclude?: number | number[];
  include?: number | number[];
  menu_order?: number;
  offset?: number;
  order?: 'asc' | 'desc';
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order';
  parent?: number | number[];
  parent_exclude?: number | number[];
  search_columns?: string[];
  slug?: string | string[];
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | string; // Custom statuses could be allowed
}
