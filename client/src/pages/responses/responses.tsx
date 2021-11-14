import React from 'react';
import Loader from '../../components/loader/loader';
import Table from '../../components/table/table';
import useGetResponses from '../../hooks/useGetResponses';
import './responses.css';

function groupBy(arr: any[], property: string) {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
}
const Responses: React.FC = () => {
  const responsesQuery = useGetResponses();
  let responsesBySurvey: { [key: string]: any } = {};
  if (responsesQuery.isSuccess) {
    responsesBySurvey = groupBy(responsesQuery.data, 'survey_id');
  }

  if (responsesBySurvey) {
    return (
      <div className="create-survey">
        <div className="responses__wrapper">
          <h2 className="create-survey__title">Responses</h2>
          {Object.keys(responsesBySurvey).map((surveyId) => (
            <Table key={surveyId} responses={responsesBySurvey[surveyId]} />
          ))}
        </div>
      </div>
    );
  }
  return <Loader />;
};

export default Responses;
