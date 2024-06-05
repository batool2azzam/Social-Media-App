export interface Author {
  id: number;
  profile_image: string;
  username: string;
  name: string;
}

export interface PostData {
  id: number;
  title: string;
  body: string;
  author: Author;
  image: string;
  created_at: string;
  comments_count: number;
}
