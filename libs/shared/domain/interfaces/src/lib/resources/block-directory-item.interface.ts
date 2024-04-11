export interface IBlockDirectoryItem {
  name: string; // The block name, in namespace/block-name format
  title: string; // The block title, in human readable format
  description: string; // A short description of the block, in human readable format
  id: string; // The block slug
  rating: number; // The star rating of the block
  rating_count: number; // The number of ratings
  active_installs: number; // The number of sites that have activated this block
  author_block_rating: number; // The average rating of blocks published by the same author
  author_block_count: number; // The number of blocks published by the same author
  author: string; // The WordPress.org username of the block author
  icon: string; // The block icon, URL
  last_updated: string; // The date when the block was last updated, Format: datetime
  humanized_updated: string; // The date when the block was last updated, in fuzzy human readable format
}
