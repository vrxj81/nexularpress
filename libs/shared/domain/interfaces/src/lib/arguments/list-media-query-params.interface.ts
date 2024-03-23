export interface IListMediaQueryParams {
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
  parent?: number | number[];
  parent_exclude?: number | number[];
  slug?: string | string[];
  status?: string; // Default: inherit
  media_type?: 'image' | 'video' | 'text' | 'application' | 'audio';
  mime_type?: string;
}
