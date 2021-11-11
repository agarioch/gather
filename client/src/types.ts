export type Post = {
  _id: string;
  type: string;
  title?: string;
  author: string;
  votes: number;
  replies: number;
  content?: string;
  survey?: Survey[];
};

export type Survey = {
  component: string;
  type: string;
  label: string;
  _uid: string;
};
