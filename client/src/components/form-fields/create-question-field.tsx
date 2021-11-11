import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import './form-fields.css';

type Props = {
  id: string;
  register: UseFormRegister<FieldValues>;
  validation?: { [key: string]: string };
  order: number;
};

const CreateQuestionField = ({ register, validation, id, order }: Props) => {
  return (
    <div className="field-group">
      <div className="field">
        <label className="field__label" htmlFor={id + '.question'}>
          Question {order + 1}
        </label>
        <input
          id={id}
          type="text"
          {...register(id + '.question', validation)}
          className="input"
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
  );
};

export default CreateQuestionField;
