export interface IPostsQueryParams {
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
    | 'title';
  search_columns?: string[];
  slug?: string | string[];
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | string; // Custom statuses could also be allowed
  tax_relation?: 'AND' | 'OR';
  categories?: number | number[];
  categories_exclude?: number | number[];
  tags?: number | number[];
  tags_exclude?: number | number[];
  sticky?: boolean;
}
