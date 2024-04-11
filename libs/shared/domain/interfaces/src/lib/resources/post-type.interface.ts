export interface IPostType {
  capabilities: object; // All capabilities used by the post type
  description: string; // A human-readable description of the post type
  hierarchical: boolean; // Whether the post type should have children
  viewable: boolean; // Whether the post type can be viewed
  labels: object; // Human-readable labels for the post type for various contexts
  name: string; // The title for the post type
  slug: string; // An alphanumeric identifier for the post type
  supports: object; // All features supported by the post type
  has_archive: string | boolean; // If the value is a string, the value will be used as the archive slug
  taxonomies: string[]; // Taxonomies associated with post type
  rest_base: string; // REST base route for the post type
  rest_namespace: string; // REST route's namespace for the post type
  visibility: object; // The visibility settings for the post type
  icon: string | null; // The icon for the post type
}
