export type Post = PostReq & {
  _id: string;
};
export type PostReq = {
  type: 'text' | 'survey';
  title: string;
  author_id: string;
  author: string;
  votes: number;
  replies: Reply[];
  content: string;
  survey?: Survey[];
  date?: string;
  respondees?: string[];
  [key: string]: any;
};
export type Survey = {
  _uid: string;
  component: string;
  type: string;
  label: string;
  options?: string[];
};
export type Reply = {
  author_id: string;
  author: string;
  content: string;
  date: string;
};
export type Response = {
  user_id: string;
  survey_id: string;
  author_name: string;
  answers: Answer[];
};
type Answer = {
  question_id: string;
  answer: string;
};
