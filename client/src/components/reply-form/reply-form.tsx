import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import './reply-form.css';
import Button from '../button/button';

type ReplyFormProps = {
  postId: string;
  handleCancel: (e: React.SyntheticEvent) => void;
  handleReply: () => void;
};

type ReplyMessage = {
  reply: string;
};

const ReplyForm = ({ postId, handleCancel, handleReply }: ReplyFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<ReplyMessage> = (data) => {
    console.log('replying:', data.reply);
    console.log({ reply: data.reply, author: 'me', time: 'now' });
    reset();
    handleReply();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field__group">
        <AnimatePresence>
          <div className="reply">
            <motion.textarea
              className="reply__input"
              defaultValue=""
              placeholder="Enter reply ..."
              initial={{ width: '1%' }}
              animate={{ width: '80%' }}
              exit={{ width: '1%' }}
              {...register('reply', { required: true })}
            />
            <div className="reply__controls">
              <Button type="submit" style={{ padding: '0.3rem 1rem' }}>
                Comment
              </Button>
              <Button
                type="tertiary"
                style={{ padding: '0.3rem 1.6rem', marginLeft: '.5rem' }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </form>
  );
};

export default ReplyForm;
