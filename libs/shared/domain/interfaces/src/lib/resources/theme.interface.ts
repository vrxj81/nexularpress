export interface ITheme {
  stylesheet: string; // The theme's stylesheet. This uniquely identifies the theme.
  template: string; // The theme's template. Refers to the parent theme for child themes.
  author: { name: string; website?: string }; // The theme author and their website.
  author_uri: string; // The website of the theme author.
  description: string; // A description of the theme.
  is_block_theme: boolean; // Whether the theme is a block-based theme.
  name: string; // The name of the theme.
  requires_php: string; // The minimum PHP version required for the theme.
  requires_wp: string; // The minimum WordPress version required for the theme.
  screenshot: string; // The theme's screenshot URL.
  tags: string[]; // Tags indicating styles and features of the theme.
  textdomain: string; // The theme's text domain.
  theme_supports: object; // Features supported by this theme.
  theme_uri: string; // The URI of the theme's webpage.
  version: string; // The theme's current version.
  status?: 'inactive' | 'active'; // The status of the theme.
}
