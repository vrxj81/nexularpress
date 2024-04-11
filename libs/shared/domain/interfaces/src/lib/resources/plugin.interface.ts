export interface IPlugin {
  plugin: string; // The main plugin file identifier
  status: 'inactive' | 'active'; // The activation status of the plugin
  name: string; // The display name of the plugin
  plugin_uri: string; // The website address for the plugin
  author: {
    name: string;
    website?: string; // Plugin author's website if available
  };
  author_uri: string; // Plugin author's website address
  description: {
    raw: string; // Raw plugin description
    rendered: string; // HTML-rendered plugin description
  };
  version: string; // The version number of the plugin
  network_only: boolean; // Whether the plugin can only be activated network-wide
  requires_wp: string; // Minimum required version of WordPress
  requires_php: string; // Minimum required version of PHP
  textdomain: string; // The plugin's text domain
}
