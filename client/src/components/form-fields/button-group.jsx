import React from "react";
import {
  AnimateSharedLayout,
  motion
} from "framer-motion";
import './button-group.css';


// Adapted from here: https://codepen.io/motcodes/pen/OJRayBE

function ButtonGroup(props) {
  const { field, register } = props;
  const [isSelected, setSelected] = React.useState(
    field.options.find((o) => o.default)
  );
  function onChangeRadio(e) {
    setSelected(e.target.value);
  }
  return (
    <motion.div className="group__container" id={props.labelId} onChange={(e) => onChangeRadio(e)}>
      <AnimateSharedLayout>
        {field.options.map((option) => (
          <React.Fragment key={option}>
            <motion.input
              className="group__input"
              type="radio"
              id={option}
              value={option}
              name={option}
              {...register(field._id, { required: true })}
            />
            <motion.label
              className="group__label"
              htmlFor={option}
              key={option}
              initial={false}
              animate={{
                visibility: "visible"
              }}
            >
              {isSelected === option && (
                <motion.div
                  className="group__background"
                  layoutId="radioBackground"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
              {option}
            </motion.label>
          </React.Fragment>
        ))}
      </AnimateSharedLayout>
    </motion.div>
  );
}

export default ButtonGroup
