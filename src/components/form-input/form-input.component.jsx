import "/Users/maxime/Desktop/project-1/src/components/form-input/form-input.styles.scss";

const FormInput = ({ handleChange, label, ...Props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} />

      {label ? (
        <label
          className={`${Props.value.lenght ? "shrink" : ""}form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
