interface IGuidObject {
  rendered: string; // Assuming a structure for the GUID object
}

interface IRenderedObject {
  rendered: string;
}

export interface IPost {
  date: string | null; // Format: datetime or null
  date_gmt: string | null; // Format: datetime or null
  guid: IGuidObject; // Read only
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
  title: IRenderedObject;
  content: IRenderedObject;
  author: number;
  excerpt: IRenderedObject;
  featured_media: number;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  meta: object; // More specific type could be defined based on meta keys
  sticky: boolean;
  template: string;
  categories: number[]; // Array of category IDs
  tags: number[]; // Array of tag IDs
}
