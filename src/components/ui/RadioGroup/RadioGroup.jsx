import css from './RadioGroup.module.css';
export default function RadioGroup({ children, title }) {
  return (
    <fieldset className={css.wrapper}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
