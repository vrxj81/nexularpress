export interface IBlockType {
  api_version: number;
  title: string;
  name: string;
  description: string;
  icon: string | null;
  attributes: object | null;
  provides_context: object;
  uses_context: string[];
  selectors: object;
  supports: object;
  category: string | null;
  is_dynamic: boolean;
  editor_script_handles: string[];
  script_handles: string[];
  view_script_handles: string[];
  editor_style_handles: string[];
  style_handles: string[];
  styles: object[];
  variations: object[];
  textdomain: string | null;
  parent: string[] | null;
  ancestor: string[] | null;
  keywords: string[];
  example: object | null;
  // Deprecated fields
  editor_script?: string | null;
  script?: string | null;
  view_script?: string | null;
  editor_style?: string | null;
  style?: string | null;
}
