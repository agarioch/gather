import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react'
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Button from '../button/button';
import Field from '../form-fields/form-field';
import QuestionCounter from '../question-counter/question-counter';
import './create-survey-form.css';
import CreateOptions from '../create-options/create-options';
import usePostPost from '../../hooks/usePostPost';

const CreateSurveyFrom = () => {
  // react-hook-forms
  const {
    register,
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions'
  });
  // react-query
  const { mutate } = usePostPost();
  // auth0
  const { user } = useAuth0();

  // map form response to survey data model
  const createSurvey = (questions) => {
    if (questions?.length) {
      return questions.map((question) => (
        {
          ...question,
          type: question.component === 'options' ? 'radio' : 'text',
          options: createOptions(question.options),
          _uid: uuidv4()
        }
      ));
    }
    return { ...questions }
  }
  const createOptions = (options) => {
    if (options?.length) {
      return options.map(option => option.option)
    }
    return options;
  }

  // post question on submit
  const onSubmit = (data) => {
    const newPost = {
      type: 'survey',
      title: data.title,
      author: user.name || 'Anon',
      content: data.content,
      votes: 0,
      replies: [],
      survey: createSurvey(data.questions)
    }
    console.log('data', JSON.stringify(newPost));
    mutate({ post: newPost });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        id={'title'}
        label={'Title'}
        type={'text'}
        register={register}
        validation={{ required: true }}
        error={errors.name}
      />
      <Field
        id={'content'}
        label={'Description'}
        type={'text'}
        register={register}
        validation={{ required: true }}
        error={errors.desc}
      />
      <QuestionCounter control={control} />
      {fields.map((item, index) => {
        const inputClasses = classNames([
          'input',
          { 'input--error': errors.questions && !!errors.questions[index] }
        ])
        const watchType = watch(`questions.${index}.component`)
        return (
          <div className="field-group__wrapper" key={item.id}>
            <div className="field-group" >
              <div className="field">
                <label className="field__label" htmlFor={`questions.${index}.question`}>
                  Question {index + 1}
                </label>
                <input className={inputClasses} {...register(`questions.${index}.label`, { required: true })} defaultValue={item.name} placeholder="Question text..." />
              </div>
              <div className="field field--left">
                <label className="field__label" htmlFor={`questions.${index}.component`}>
                  Type
                </label>
                <select className="input" {...register(`questions.${index}.component`)} defaultValue='text'  >
                  <option value="text">Text</option>
                  <option value="options">Choice</option>
                </select>
              </div>
              <div className="field__controls">
                <button className="input__delete" type="button" onClick={() => remove(index)} alt="delete"><i className="fas fa-trash"></i></button>
              </div>
            </div>
            {(watchType === 'options') && (
              <CreateOptions parentIndex={index} control={control} register={register} />
            )}
          </div>
        );
      })}
      <div className="form__add">
        <Button type="secondary" onClick={() => append({ label: '', type: 'text' })}>
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


