import React from 'react';
import { useFieldArray } from 'react-hook-form';
import Button from '../button/button';
import './create-options.css';


const CreateOptions = ({ parentIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `questions.${parentIndex}.options`,
  });

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div key={item.id} className="option">
            <span className="option__index">{parentIndex + 1 + '.' + index}</span>
            <input
              className="input"
              {...register(`questions.${parentIndex}.options.${index}.option`, { required: true })}
              placeholder='Option name'
              style={{ width: '12rem' }}
            />
            <button className="option__delete" type="button" onClick={() => remove(index)} alt="delete"><i className="fas fa-minus-circle"></i></button>

          </div>
        );
      })}

      <Button
        type="tertiary"
        onClick={() => {
          append({ option: '' })
        }
        }
      >
        <i class="fas fa-plus"></i> Option
      </Button>
    </div>
  );
};

export default CreateOptions;
