import React from 'react';
import { useParams } from 'react-router';
import useGetSurveyResponses from '../../hooks/useGetSurveyResponses';
import './survey-responses.css';
import '../../components/card/card.css';
import Table from '../../components/table/table';

const SurveyResponses = () => {
  const { id } = useParams<{ id: string }>();
  const responsesQuery = useGetSurveyResponses(id);
  return (
    <div className="dashboard">
      <h2>Survey {id} Responses</h2>
      {responsesQuery.isSuccess && <Table responses={responsesQuery.data} />}
    </div>
  );
};

export default SurveyResponses;
