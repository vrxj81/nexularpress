export interface IRetrieveCategoryQueryParams {
  id: number; // Unique identifier for the term.
  context?: 'view' | 'embed' | 'edit'; // Default: view
}
