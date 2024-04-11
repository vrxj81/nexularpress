export interface IEditorBlock {
  date: string | null; // Format: datetime
  date_gmt: string | null; // Format: datetime
  guid: { rendered: string }; // Globally unique identifier for the post
  id: number; // Unique identifier for the post
  link: string; // URL to the post
  modified: string; // Format: datetime
  modified_gmt: string; // Format: datetime
  slug: string; // An alphanumeric identifier for the post unique to its type
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'; // A named status for the post
  type: string; // Type of post
  password: string; // A password to protect access to the content and excerpt
  title: { rendered: string }; // The title for the post
  content: { rendered: string }; // The content for the post
  meta: object; // Meta fields
  template: string; // The theme file to use to display the post
}
