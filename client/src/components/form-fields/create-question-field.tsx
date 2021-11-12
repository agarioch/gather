import classNames from 'classnames';
import React from 'react';
import { UseFormRegister, UseFormWatch, FieldValues } from 'react-hook-form';
import './form-fields.css';

type Props = {
  id: string;
  register: UseFormRegister<FieldValues>;
  validation?: { [key: string]: boolean };
  order: number;
  error: any;
  watch: UseFormWatch<FieldValues>;
};

const CreateQuestionField = ({ register, validation, id, order, error, watch }: Props) => {
  const inputClass = classNames(['input', { 'input--error': !!error[id]?.question }]);
  return (
    <>
      <div className="field-group">
        <div className="field">
          <label className="field__label" htmlFor={id + '.question'}>
            Question {order + 1}
          </label>
          <input
            id={id}
            type="text"
            {...register(id + '.question', validation)}
            className={inputClass}
            placeholder="Question text to display to user ..."
          />
        </div>
        <div className="field field--left">
          <label className="field__label" htmlFor={id + '.type'}>
            Response Type
          </label>
          <select className="input" {...register(id + '.type')}>
            <option value="text">Text</option>
            <option value="options">Options</option>
          </select>
        </div>
      </div>
      {watch(id + '.type') === 'options' && <p>todo: add answer options</p>}
    </>
  );
};

export default CreateQuestionField;
