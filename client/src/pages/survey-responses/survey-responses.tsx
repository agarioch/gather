import React from 'react';
import { useParams } from 'react-router';
import { ParentSize } from '@visx/responsive';
import useGetSurveyResponses from '../../hooks/useGetSurveyResponses';
import useGetPost from '../../hooks/useGetPost';
import './survey-responses.css';
import '../../components/card/card.css';
import Table from '../../components/table/table';
import BarChart from '../../components/bar-chart/bar-chart';

const SurveyResponses = () => {
  const { id } = useParams<{ id: string }>();
  const responsesQuery = useGetSurveyResponses(id);
  const postQuery = useGetPost(id);
  // TODO: map survey and response data into format for chart
  return (
    <div className="dashboard">
      <h2>Responses</h2>
      {responsesQuery.isSuccess && <Table responses={responsesQuery.data} />}
      <div className="dashboard__chart">
        <ParentSize>
          {(parent) => <BarChart width={parent.width} height={parent.height} />}
        </ParentSize>
      </div>
    </div>
  );
};

export default SurveyResponses;
