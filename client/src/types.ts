export type Post = {
  _id: string;
  type: string;
  title?: string;
  author: string;
  votes: number;
  replies: Reply[];
  content?: string;
  survey?: Survey[];
};

export type Survey = {
  _uid: string;
  component: string;
  type: string;
  label: string;
  options?: string[];
};

export type Reply = {
  author: string;
  content: string;
  date: string;
};
