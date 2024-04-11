export interface IListPluginsQueryParams {
  context?: 'view' | 'embed' | 'edit'; // Scope under which the request is made
  search?: string; // Limit results to those matching a string
  status?: 'inactive' | 'active'; // Limits results to plugins with the given status
}
