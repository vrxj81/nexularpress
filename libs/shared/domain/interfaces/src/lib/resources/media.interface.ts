export interface IMediaItem {
  id: number; // Unique identifier for the post
  date: string | null; // Format: datetime
  date_gmt: string | null; // Format: datetime
  guid: { rendered: string }; // Globally unique identifier for the post
  link: string; // URL to the post
  modified: string; // Format: datetime
  modified_gmt: string; // Format: datetime
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: string; // Type of post
  permalink_template: string;
  generated_slug: string;
  title: { rendered: string };
  author: number;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  meta: object;
  template: string;
  alt_text: string;
  caption: { rendered: string };
  description: { rendered: string };
  media_type: 'image' | 'file';
  mime_type: string;
  media_details: object;
  post: number;
  source_url: string;
  missing_image_sizes?: string[]; // Optional based on context
}
