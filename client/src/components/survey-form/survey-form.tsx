import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Survey } from '../../types';
import Field from '../form-field/form-field';

// Question and answer types
type SurveyFormProps = {
  questions: Survey[];
};
type Answer = {
  [key: string]: string;
};

const SurveyForm = ({ questions }: SurveyFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Answer>();
  const onSubmit: SubmitHandler<Answer> = (data) => console.log(data);
  console.log(watch(questions[0]._uid));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question) => {
        switch (question.type) {
          default:
            return (
              <Field
                key={question._uid}
                field={question}
                type={question.type}
                register={register}
              />
            );
        }
      })}
    </form>
  );
};

export default SurveyForm;
