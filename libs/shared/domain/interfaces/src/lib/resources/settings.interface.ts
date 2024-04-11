export interface ISiteSettings {
  title: string; // Site title
  description: string; // Site tagline
  url: string; // Site URL
  email: string; // Admin email address
  timezone: string; // Site timezone
  date_format: string; // Date format
  time_format: string; // Time format
  start_of_week: number; // Start day of the week
  language: string; // WordPress locale code
  use_smilies: boolean; // Convert emoticons to graphics
  default_category: number; // Default post category
  default_post_format: string; // Default post format
  posts_per_page: number; // Blog pages show at most
  show_on_front: string; // What to show on the front page
  page_on_front: number; // Page ID to show on the front page
  page_for_posts: number; // Page ID for latest posts
  default_ping_status: 'open' | 'closed'; // Link notifications on new articles
  default_comment_status: 'open' | 'closed'; // Comments on new posts
  site_logo: number; // Site logo ID
  site_icon: number; // Site icon ID
}
