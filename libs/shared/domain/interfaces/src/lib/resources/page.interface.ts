export interface IPage {
  date: string | null; // Format: datetime
  date_gmt: string | null; // Format: datetime
  guid: { rendered: string }; // Read only
  id: number; // Read only
  link: string; // Format: uri, Read only
  modified: string; // Format: datetime, Read only
  modified_gmt: string; // Format: datetime, Read only
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: string; // Read only
  password?: string;
  permalink_template?: string; // Read only
  generated_slug?: string; // Read only
  parent: number;
  title: { rendered: string };
  content: { rendered: string; protected?: boolean };
  author: number;
  excerpt: { rendered: string; protected?: boolean };
  featured_media: number;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  menu_order: number;
  meta: object; // Can be further detailed based on the meta fields used
  template: string;
}
