import React from 'react';
import { useQuery } from 'react-query';
import { getSurveyResponses } from '../services/gather-api';
import { Response } from '../types';

const useGetSurveyResponses = (surveyId: string) => {
  return useQuery<Response[], Error>(['responses', surveyId], () => getSurveyResponses(surveyId));
};

export default useGetSurveyResponses;
