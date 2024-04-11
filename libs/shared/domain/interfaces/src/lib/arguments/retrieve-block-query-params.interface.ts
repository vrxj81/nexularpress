export interface IRetrieveEditorBlockQueryParams {
  context?: 'view' | 'embed' | 'edit';
  password?: string; // The password for the post if it is password protected
}
