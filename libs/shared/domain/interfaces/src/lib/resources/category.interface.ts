export interface ICategory {
  id: number; // Unique identifier for the term, read-only
  count: number; // Number of published posts for the term, read-only
  description: string; // HTML description of the term
  link: string; // URL of the term, read-only, format: uri
  name: string; // HTML title for the term
  slug: string; // An alphanumeric identifier for the term unique to its type
  taxonomy: 'category'; // Type attribution for the term, read-only
  parent: number; // The parent term ID
  meta: object; // Meta fields
}
