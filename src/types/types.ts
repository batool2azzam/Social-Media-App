export interface Author {
  id: number;
  profile_image: string;
  username: string;
  name: string;
}

export interface Comment {
  id: number;
  body: string;
  author: Author;
}

export interface PostData {
  id: number;
  title: string;
  body: string;
  author: Author;
  image: string;
  created_at: string;
  comments_count: number;
  comments: Comment[];
}

export interface User {
  username: string;
  name: string;
  email: string;
  id: number;
  profile_image: string;
  comments_count: number;
  posts_count: number;
}
