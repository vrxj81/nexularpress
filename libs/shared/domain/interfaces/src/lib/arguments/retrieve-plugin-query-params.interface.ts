export interface IRetrievePluginQueryParams {
  context?: 'view' | 'embed' | 'edit'; // Scope under which the request is made
  plugin?: string; // Specific plugin to retrieve, usually the base plugin file path
}
