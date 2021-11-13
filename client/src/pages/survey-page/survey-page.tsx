import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import Loader from '../../components/loader/loader';
import { getPost } from '../../services/gather-api';
import SurveyForm from '../../components/survey-form/survey-form';
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
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <br />
          {post.survey && <SurveyForm id={id} questions={post.survey} />}
        </div>
      </Card>
    </div>
  );
};

export default SurveyPage;
