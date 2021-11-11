import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { Survey } from '../../types';
import Button from '../button/button';
import CreateQuestionField from '../form-fields/create-question-field';
import Field from '../form-fields/form-field';
import './create-survey-form.css';

type CreateQuestion = {
  id: string;
  configured: boolean;
  order: number;
  type: string;
  label: string;
  options?: string[];
};

const CreateSurveyFrom: React.FC = () => {
  const [questions, setQuestions] = useState<CreateQuestion[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Survey> = (data) => console.log('submitting', data);
  const onAdd = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const position = questions.length;
    const id = uuid();
    setQuestions((prior) => [
      ...prior,
      { id, configured: false, order: position, type: 'text', label: '' },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        id={'name'}
        label={'Title'}
        type={'text'}
        register={register}
        validation={{ required: true }}
        error={errors.name}
      />
      <Field
        id={'desc'}
        label={'Description'}
        type={'text'}
        register={register}
        validation={{ required: true }}
        error={errors.desc}
      />
      {questions &&
        questions.map((question) => (
          <CreateQuestionField
            key={question.id}
            id={question.id}
            register={register}
            order={question.order}
          />
        ))}
      <div className="form__add">
        <Button type="secondary" onClick={onAdd}>
          <i className="fas fa-plus"></i> Add a Question
        </Button>
      </div>

      <div className="form__actions">
        <Button type="submit">
          <i className="fas fa-check"></i> Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateSurveyFrom;
