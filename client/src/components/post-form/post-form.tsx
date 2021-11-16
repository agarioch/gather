import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../button/button';
import usePostPost from '../../hooks/usePostPost';
import './post-form.css';
import '../form-fields/form-fields.css';
import { PostReq } from '../../types';

type PostFormProps = {
  handleCancel: () => void;
};
type PostData = {
  title: string;
  content: string;
  date: string;
};

const PostForm = ({ handleCancel }: PostFormProps) => {
  const { user } = useAuth0();
  const { mutate } = usePostPost();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<PostData> = ({ title, content }) => {
    const newPost: PostReq = {
      title,
      content,
      type: 'text',
      author_id: user?.email || 'Anon',
      author: user?.name || 'Anon',
      votes: 0,
      replies: [],
      date: new Date().toISOString(),
    };
    mutate({ post: newPost });
    reset();
    handleCancel();
  };
  return (
    <motion.div
      className="posts__create"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="post-title">Title</label>
          <input
            {...register('title', { required: true })}
            className="input"
            type="text"
            placeholder="Idea title"
            id="post-title"
          />
        </div>
        <div className="field">
          <label htmlFor="post-content">Post content</label>
          <textarea
            className="input"
            id="post-content"
            placeholder="Explain your idea or suggestion ..."
            {...register('content', { required: true })}
          ></textarea>
        </div>
        <div className="post__controls">
          <Button type="submit" style={{ padding: '0.3rem 1.6rem' }}>
            Share
          </Button>
          <Button
            type="tertiary"
            style={{ padding: '0.3rem 1.6rem', marginLeft: '.5rem' }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default PostForm;
