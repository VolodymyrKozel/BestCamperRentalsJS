import css from './Input.module.css';

const Input = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  className,
  required,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className + ' ' + css.input}
      required={required}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  placeholder: '',
  className: '',
  required: false,
};

export default Input;
