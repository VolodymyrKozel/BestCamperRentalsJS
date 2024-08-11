import css from './Filters.module.css';
import Button from '../ui/Button/Button';
import CheckboxButton from '../ui/CheckBox/CheckBox';
import { Controller, useForm } from 'react-hook-form';

export default function Filters() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>Filters</label>
        <h2 className={css.title}>Vehicle equipment</h2>
        <div className={css.wrapper}>
          <Controller
            name="AC"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckboxButton {...field} id="AC" icon="AC" label="AC" />
            )}
          />
          <Controller
            name="engine"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckboxButton
                {...field}
                id="engine"
                icon="engine"
                label="Fuel"
              />
            )}
          />
          <Controller
            name="transmission"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckboxButton
                {...field}
                id="transmission"
                icon="transmission"
                label="Transmission"
              />
            )}
          />
        </div>
        <h2 className={css.title}>Vehicle type</h2>
        <div className={css.wrapper}></div>
        <Button type="submit" className={css.button}>
          Apply
        </Button>
      </form>
    </>
  );
}
