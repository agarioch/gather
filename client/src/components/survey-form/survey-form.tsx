import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Response, Survey } from '../../types';
import Button from '../button/button';
import Field from '../form-fields/form-field';
import OptionField from '../form-fields/form-option';
import './survey-form.css';
import Success from '../success/success';
import usePostResponse from '../../hooks/usePostResponse';

// Question and answer types
type SurveyFormProps = {
  id: string;
  questions: Survey[];
};
type Answer = {
  [key: string]: string;
};

const SurveyForm = ({ id, questions }: SurveyFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();
  const { mutate } = usePostResponse();
  const { user } = useAuth0();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Answer>();
  const onSubmit: SubmitHandler<Answer> = (data) => {
    console.log('submitting', data);
    const response: Response = {
      survey_id: id,
      user_id: 'test',
      author_name: user?.name || 'Anon',
      answers: Object.keys(data).map((key) => {
        return { question_id: key, answer: data[key] };
      }),
    };
    mutate({ id, response });
    reset();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      history.push('/feed');
    }, 1000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question) => {
        switch (question.component) {
          case 'options':
            return (
              <OptionField
                key={question._uid}
                field={question}
                type={question.type}
                register={register}
                error={errors[question._uid]}
              />
            );
          default:
            return (
              <Field
                key={question._uid}
                id={question._uid}
                label={question.label}
                type={question.type}
                register={register}
                validation={{ required: true }}
                error={errors[question._uid]}
              />
            );
        }
      })}
      <div className="form__actions">
        <Button type="submit">
          <i className="fas fa-check"></i> Submit
        </Button>
      </div>
      {submitting && <Success />}
    </form>
  );
};

export default SurveyForm;
