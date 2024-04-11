export interface IWPBlockRevision {
  author: number; // The ID for the author of the revision
  date: string; // The date the revision was published, in the site's timezone, Format: datetime
  date_gmt: string; // The date the revision was published, as GMT, Format: datetime
  guid: { rendered: string }; // The globally unique identifier for the post
  id: number; // Unique identifier for the revision
  modified: string; // The date the revision was last modified, in the site's timezone, Format: datetime
  modified_gmt: string; // The date the revision was last modified, as GMT, Format: datetime
  parent: number; // The ID for the parent of the revision
  slug: string; // An alphanumeric identifier for the revision unique to its type
  title: { rendered: string }; // The title for the post
  content: { rendered: string }; // The content for the post
}
