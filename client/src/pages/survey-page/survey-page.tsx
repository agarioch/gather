import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import Loader from '../../components/loader/loader';
import { getPost } from '../../services/gather-api';
import { Post } from '../../types';
import './survey-page.css';

const SurveyPage: React.FC = () => {
  const [post, setPost] = useState<Post>();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    getPost(id).then((res) => setPost(res[0]));
  }, [id]);
  if (!id) {
    return <h1>Create a new survey</h1>;
  }
  if (!post) {
    return <Loader />;
  }
  return (
    <div className="survey">
      <Card>
        <form>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <br />
          <div className="json">
            <code>{JSON.stringify(post)}</code>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SurveyPage;
