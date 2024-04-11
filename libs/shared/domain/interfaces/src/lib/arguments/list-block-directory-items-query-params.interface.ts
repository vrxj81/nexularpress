export interface IListBlockDirectoryItemsQueryParams {
  context?: 'view'; // Scope under which the request is made
  page?: number; // Current page of the collection
  per_page?: number; // Maximum number of items to be returned in result set
  term: string; // Limit result set to blocks matching the search term, Required
}
