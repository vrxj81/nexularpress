export interface IPostStatus {
  name: string; // The title for the status
  private: boolean; // Whether posts with this status should be private
  protected: boolean; // Whether posts with this status should be protected
  public: boolean; // Whether posts of this status should be shown in the front end of the site
  queryable: boolean; // Whether posts with this status should be publicly-queryable
  show_in_list: boolean; // Whether to include posts in the edit listing for their post type
  slug: string; // An alphanumeric identifier for the status
  date_floating: boolean; // Whether posts of this status may have floating published dates
}
