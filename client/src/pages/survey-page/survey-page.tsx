import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import Loader from '../../components/loader/loader';
import useGetPost from '../../hooks/useGetPost';
import SurveyForm from '../../components/survey-form/survey-form';
import { Post } from '../../types';
import './survey-page.css';

const SurveyPage = () => {
  const { id } = useParams<{ id: string }>();
  const postQuery = useGetPost(id);
  console.log(postQuery.data);
  if (!id) {
    return <h1>Create a new survey</h1>;
  }
  if (postQuery.isLoading) {
    return <Loader />;
  }
  if (postQuery.isError) {
    return <h3>Error, sorry :(</h3>;
  }
  if (postQuery.isSuccess) {
    return (
      <div className="survey">
        <Card>
          <div>
            <h2>{postQuery.data.title}</h2>
            <p>{postQuery.data.content}</p>
            <br />
            {postQuery.data.type === 'survey' && postQuery.data.survey && (
              <SurveyForm id={id} questions={postQuery.data.survey} />
            )}
          </div>
        </Card>
      </div>
    );
  }
};

export default SurveyPage;
