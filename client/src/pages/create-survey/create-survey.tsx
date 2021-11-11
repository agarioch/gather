import React from 'react';
import Card from '../../components/card/card';
import CreateSurveyFrom from '../../components/create-survey-form/create-survey-form';
import './create-survey.css';

const CreateSurvey: React.FC = () => (
  <div className="create-survey">
    <Card>
      <h2 className="create-survey__title">
        <i className="fas fa-plus"></i> Add a new survey
      </h2>
      <CreateSurveyFrom />
    </Card>
  </div>
);

export default CreateSurvey;
