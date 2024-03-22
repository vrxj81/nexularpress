export interface IListCategoriesQueryParams {
  context?: 'view' | 'embed' | 'edit'; // Scope under which the request is made; determines fields present in response
  page?: number; // Current page of the collection, default: 1
  per_page?: number; // Maximum number of items to be returned in result set, default: 10
  search?: string; // Limit results to those matching a string
  exclude?: number[]; // Ensure result set excludes specific IDs
  include?: number[]; // Limit result set to specific IDs
  order?: 'asc' | 'desc'; // Order sort attribute ascending or descending, default: asc
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count'; // Sort collection by term attribute, default: name
  hide_empty?: boolean; // Whether to hide terms not assigned to any posts
  parent?: number; // Limit result set to terms assigned to a specific parent
  post?: number; // Limit result set to terms assigned to a specific post
  slug?: string[]; // Limit result set to terms with one or more specific slugs
}
