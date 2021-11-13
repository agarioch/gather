import React from 'react';
import Card from '../../components/card/card';
import useGetResponses from '../../hooks/useGetResponses';
import './responses.css';

const Responses: React.FC = () => {
  const responsesQuery = useGetResponses();

  return (
    <div className="create-survey">
      <Card>
        <h2 className="create-survey__title">Responses</h2>
        <code>{JSON.stringify(responsesQuery.data)}</code>
      </Card>
    </div>
  );
};

export default Responses;
