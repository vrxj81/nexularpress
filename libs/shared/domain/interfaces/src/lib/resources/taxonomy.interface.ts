export interface ITaxonomy {
  capabilities: object; // All capabilities used by the taxonomy, Read only
  description: string; // A human-readable description of the taxonomy, Read only
  hierarchical: boolean; // Whether or not the taxonomy should have children, Read only
  labels: object; // Human-readable labels for the taxonomy for various contexts, Read only
  name: string; // The title for the taxonomy, Read only
  slug: string; // An alphanumeric identifier for the taxonomy, Read only
  show_cloud: boolean; // Whether or not the term cloud should be displayed, Read only
  types: string[]; // Types associated with the taxonomy, Read only
  rest_base: string; // REST base route for the taxonomy, Read only
  rest_namespace: string; // REST namespace route for the taxonomy, Read only
  visibility: object; // The visibility settings for the taxonomy, Read only
}
