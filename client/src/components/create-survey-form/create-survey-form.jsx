import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react'
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Button from '../button/button';
import Field from '../form-fields/form-field';
import QuestionCounter from '../question-counter/question-counter';
import './create-survey-form.css';
import CreateOptions from '../create-options/create-options';
import usePostPost from '../../hooks/usePostPost';
import Success from '../success/success';

const CreateSurveyFrom = () => {
  const [submitting, setSubmitting] = useState(false);
  // react router
  const history = useHistory()

  // react-hook-forms
  const {
    register,
    control,
    reset,
    watch,
    handleSubmit,
    setError,
    clearErrors,
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
    if (!data.questions.length) {
      setError('questions', { type: 'manual', message: 'Surveys should contain at least one question' })
      return
    }
    const newPost = {
      type: 'survey',
      title: data.title,
      author_id: user.email || 'Anon',
      author: user.name || 'Anon',
      content: data.content,
      votes: 0,
      replies: [],
      survey: createSurvey(data.questions),
      date: new Date().toISOString(),
      respondees: []
    }
    mutate({ post: newPost });
    reset();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      history.push('/feed');
    }, 1000);
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        id={'title'}
        label={'Title'}
        type={'text'}
        register={register}
        validation={{ required: 'a title is required to identify the survey' }}
        error={errors.title}
      />
      {errors.title && <p className="error-message">{errors.title.message}</p>}
      <Field
        id={'content'}
        label={'Description'}
        type={'text'}
        register={register}
        validation={{ required: 'a description of the survey is required' }}
        error={errors.content}
      />
      {errors.content && <p className="error-message">{errors.content.message}</p>}
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
        {/* <Button type="secondary" onClick={() => append({ label: '', type: 'text' })}> */}
        <Button type="secondary" onClick={() => {
          append({ label: '', type: 'choice', options: [{ id: uuidv4(), option: '😠' }, { id: uuidv4(), option: '😕' }, { id: uuidv4(), option: '😐' }, { id: uuidv4(), option: '🙂' }, { id: uuidv4(), option: '😁' }] })
          clearErrors('questions');
        }}>
          <i className="fas fa-plus"></i> Add a Question
        </Button>
      </div>
      <div className="form__actions">
        {errors.questions && <p className="error-message">{errors.questions.message}</p>}
        <Button type="submit" style={{ width: '7rem' }}>
          <i className="fas fa-check"></i> Submit
        </Button>
      </div>
      {submitting && <Success />}
    </form>
  );
};

export default CreateSurveyFrom;


