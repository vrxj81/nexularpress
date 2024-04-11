export interface ISearchResult {
  id: string | number; // Unique identifier for the object
  title: string; // The title for the object
  url: string; // URL to the object
  type: 'post' | 'term' | 'post-format'; // Object type
  subtype: 'post' | 'page' | 'category' | 'post_tag'; // Object subtype
}
