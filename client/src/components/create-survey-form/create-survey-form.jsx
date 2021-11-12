import React, { useState } from 'react';
import { useForm, SubmitHandler, useWatch, useFieldArray } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { Survey } from '../../types';
import Button from '../button/button';
import CreateQuestionField from '../form-fields/create-question-field';
import Field from '../form-fields/form-field';
import './create-survey-form.css';

const CreateSurveyFrom = () => {
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
    name: 'questions',
    keyName: 'id'
  });
  const onSubmit = (data) => console.log('data', data);
  console.log(watch());
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

      {fields.map((item, index) => {
        return (
          <div className="field-group" key={item.id}>
            <div className="field">
              <label className="field__label" htmlFor={`questions.${item.id}.question`}>
                Question {index + 1}
              </label>
              <input className="input" {...register(`questions.${item.id}.question`)} />
            </div>
            <div className="field field--left">
              <label className="field__label" htmlFor={`questions.${item.id}.type`}>
                Type
              </label>
              <select className="input" {...register(`questions.${item.id}.type`)} defaultValue='10' >
                <option value="text">Text</option>
                <option value="options">Choice</option>
              </select>
            </div>
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        );
      })}
      <button type="button" onClick={() => append({})}>
        <i className="fas fa-plus"></i> Add a Question
      </button>
      <div className="form__actions">
        <Button type="submit">
          <i className="fas fa-check"></i> Submit
        </Button>
      </div>
    </form>
  );

  // const onSubmit: SubmitHandler<Survey> = (data) => {
  //   console.log(data);
  // };
  // const onAdd = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   const position = questions.length;
  //   const id = uuid();
  //   setQuestions((prior) => [
  //     ...prior,
  //     { id, configured: false, order: position, type: 'text', label: '' },
  //   ]);
  // };

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <Field
  //       id={'name'}
  //       label={'Title'}
  //       type={'text'}
  //       register={register}
  //       validation={{ required: true }}
  //       error={errors.name}
  //     />
  //     <Field
  //       id={'desc'}
  //       label={'Description'}
  //       type={'text'}
  //       register={register}
  //       validation={{ required: true }}
  //       error={errors.desc}
  //     />
  //     {questions &&
  //       questions.map((question) => (
  //         <CreateQuestionField
  //           key={question.id}
  //           id={question.id}
  //           register={register}
  //           validation={{ required: true }}
  //           order={question.order}
  //           error={errors}
  //           watch={watch}
  //         />
  //       ))}
  //     <div className="form__add">
  //       <Button type="secondary" onClick={onAdd}>
  //         <i className="fas fa-plus"></i> Add a Question
  //       </Button>
  //     </div>

  //     <div className="form__actions">
  //       <Button type="submit">
  //         <i className="fas fa-check"></i> Submit
  //       </Button>
  //     </div>
  //   </form>
  // );
};

export default CreateSurveyFrom;

