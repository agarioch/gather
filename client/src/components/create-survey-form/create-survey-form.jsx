import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import classNames from 'classnames';
import Button from '../button/button';
import Field from '../form-fields/form-field';
import QuestionCounter from '../question-counter/question-counter';
import './create-survey-form.css';
import CreateOptions from '../create-options/create-options';

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
    name: 'questions'
  });
  const onSubmit = (data) => {
    console.log('data', data);
    reset();
  }

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
      <QuestionCounter control={control} />
      {fields.map((item, index) => {
        const inputClasses = classNames([
          'input',
          { 'input--error': errors.questions && !!errors.questions[index] }
        ])
        const watchType = watch(`questions.${index}.type`)
        console.log('rendering')
        return (
          <div className="field-group__wrapper" key={item.id}>
            <div className="field-group" >
              <div className="field">
                <label className="field__label" htmlFor={`questions.${index}.question`}>
                  Question {index + 1}
                </label>
                <input className={inputClasses} {...register(`questions.${index}.question`, { required: true })} defaultValue={item.name} placeholder="Question text..." />
              </div>
              <div className="field field--left">
                <label className="field__label" htmlFor={`questions.${index}.type`}>
                  Type
                </label>
                <select className="input" {...register(`questions.${index}.type`)} defaultValue='text'  >
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
        <Button type="secondary" onClick={() => append({ question: '', type: 'text' })}>
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


