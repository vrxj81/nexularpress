export interface IRetrieveCommentQueryParams {
  context?: 'view' | 'embed' | 'edit';
  password?: string; // For the parent post of the comment if the post is password protected
}
