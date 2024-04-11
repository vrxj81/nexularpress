export interface IListSearchResultsQueryParams {
  context?: 'view' | 'embed'; // Scope under which the request is made
  page?: number; // Current page of the collection
  per_page?: number; // Maximum number of items to be returned in result set
  search?: string; // Limit results to those matching a string
  type?: 'post' | 'term' | 'post-format'; // Limit results to items of an object type
  subtype?: string; // Limit results to items of one or more object subtypes, 'any' for any subtype
  exclude?: number[]; // Ensure result set excludes specific IDs
  include?: number[]; // Limit result set to specific IDs
}
