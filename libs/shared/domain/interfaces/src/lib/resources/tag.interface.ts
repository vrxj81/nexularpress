export interface ITag {
  id: number; // Read only
  count: number; // Read only
  description: string;
  link: string; // Read only, Format: uri
  name: string;
  slug: string;
  taxonomy: 'post_tag'; // Read only
  meta: object; // This can be further detailed based on the meta fields you use
}
