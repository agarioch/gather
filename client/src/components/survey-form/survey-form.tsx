import React, { useEffect, useState } from 'react';
import { Survey } from '../../types';
import Field from '../form-field/form-field';

type SurveyFormProps = {
  questions: Survey[];
};
type Answer = {
  [key: string]: string;
};

const SurveyForm = ({ questions }: SurveyFormProps) => {
  const [answers, setAnswers] = useState<Answer>({});

  useEffect(() => {
    const questionIds = questions.map((q) => q._uid);
    const initAnswers = questionIds.reduce<Answer>(
      (acc, curr: string) => ((acc[curr] = ''), acc),
      {}
    );
    setAnswers(initAnswers);
  }, [questions]);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const answerChanged = (fieldId: string, value: string) => {
    setAnswers((priorAnswers) => {
      const newAnswers = Object.assign({}, priorAnswers, { [fieldId]: value });
      return newAnswers;
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {questions.map((question) => {
        switch (question.type) {
          default:
            return (
              <Field
                key={question._uid}
                field={question}
                type={question.type}
                fieldChanged={answerChanged}
                value={answers[question._uid]}
              />
            );
        }
      })}
    </form>
  );
};

export default SurveyForm;
