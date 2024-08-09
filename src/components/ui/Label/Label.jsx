import css from './Label.module.css';
const Label = ({ text, htmlFor, className, required }) => {
  return (
    <label htmlFor={htmlFor} className={css.label + ' ' + className}>
      {text} {required && <span>*</span>}
    </label>
  );
};

export default Label;
