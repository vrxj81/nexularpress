export interface IListTaxonomiesQueryParams {
  context?: 'view' | 'embed' | 'edit';
  type?: string; // Limit results to taxonomies associated with a specific post type
}
