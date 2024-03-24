export interface IUser {
  id: number; // Unique identifier for the user
  username: string; // Login name for the user
  name: string; // Display name for the user
  first_name: string; // First name for the user
  last_name: string; // Last name for the user
  email: string; // The email address for the user
  url: string; // URL of the user
  description: string; // Description of the user
  link: string; // Author URL of the user
  locale: string; // Locale for the user
  nickname: string; // The nickname for the user
  slug: string; // An alphanumeric identifier for the user
  registered_date: string; // Registration date for the user
  roles: string[]; // Roles assigned to the user
  capabilities: object; // All capabilities assigned to the user
  extra_capabilities: object; // Any extra capabilities assigned to the user
  avatar_urls: object; // Avatar URLs for the user
  meta: object; // Meta fields
}
