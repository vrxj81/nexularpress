export interface IRetrieveEditorBlockQueryParams {
  id: number; // Unique identifier for the post
  context?: 'view' | 'embed' | 'edit';
  password?: string; // The password for the post if it is password protected
}
