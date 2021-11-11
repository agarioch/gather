import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Survey } from '../../types';
import Button from '../button/button';
import Field from '../form-fields/form-field';
import OptionField from '../form-fields/form-option';
import './survey-form.css';

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
    formState: { errors },
  } = useForm<Answer>();
  const onSubmit: SubmitHandler<Answer> = (data) => console.log('submitting', data);

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
    </form>
  );
};

export default SurveyForm;
