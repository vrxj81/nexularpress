export interface IListEditorBlocksQueryParams {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  after?: string; // ISO8601 date format
  modified_after?: string; // ISO8601 date format
  before?: string; // ISO8601 date format
  modified_before?: string; // ISO8601 date format
  exclude?: number[];
  include?: number[];
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
  slug?: string[];
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private';
}
