export type Post = {
  _id: string;
  type: string;
  title?: string;
  author: string;
  votes: number;
  replies: number;
  content?: string;
};
