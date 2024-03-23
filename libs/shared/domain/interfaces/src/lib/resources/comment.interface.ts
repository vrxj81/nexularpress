export interface IComment {
  id: number; // Unique identifier for the comment
  author: number; // The ID of the user object, if the author was a user
  author_email: string; // Email address for the comment author (context: edit)
  author_ip: string; // IP address for the comment author (context: edit)
  author_name: string; // Display name for the comment author
  author_url: string; // URL for the comment author
  author_user_agent: string; // User agent for the comment author (context: edit)
  content: { rendered: string; protected?: boolean }; // The content for the comment
  date: string; // The date the comment was published, in the site's timezone
  date_gmt: string; // The date the comment was published, as GMT
  link: string; // URL to the comment
  parent: number; // The ID for the parent of the comment
  post: number; // The ID of the associated post object
  status: string; // State of the comment
  type: string; // Type of the comment
  author_avatar_urls: object; // Avatar URLs for the comment author
  meta: object; // Meta fields
}
