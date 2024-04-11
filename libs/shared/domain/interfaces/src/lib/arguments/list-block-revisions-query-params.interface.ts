export interface IListBlockRevisionsQueryParams {
  context?: 'view' | 'embed' | 'edit'; // Scope under which the request is made
  page?: number; // Current page of the collection
  per_page?: number; // Maximum number of items to be returned in result set
  search?: string; // Limit results to those matching a string
  exclude?: number[]; // Ensure result set excludes specific IDs
  include?: number[]; // Limit result set to specific IDs
  offset?: number; // Offset the result set by a specific number of items
  order?: 'asc' | 'desc'; // Order sort attribute ascending or descending
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'; // Sort collection by object attribute
}
