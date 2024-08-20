import css from './Filters.module.css';
import Button from '../ui/Button/Button';
import CheckboxButton from '../ui/CheckBox/CheckBox';
import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Radio from '../ui/Radio/Radio';
import RadioGroup from '../ui/RadioGroup/RadioGroup';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/campers/slice';
import { useSearchParams } from 'react-router-dom';

export default function Filters() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      AC: false,
      engine: false,
      transmission: false,
      type: '',
    },
    mode: 'onChange',
  });
  /*   const [radio, setRadio] = useState(false);
  const onChange = e => {
    setRadio(e.target.value);
    setValue('type', e.target.value);
  }; */

  const transformData = data => {
    const transformed = {};

    if (data.AC) transformed.AC = 1;
    if (data.engine) transformed.engine = 1;
    if (data.transmission) transformed.transmission = 1;

    return {
      ...transformed,
      form: data.form,
    };
  };
  const onSubmit = data => {
    console.log(data);
    const dataTransformed = transformData(data);

    setSearchParams(dataTransformed);
  };
  const onChange = event => {
    setValue('type', event.target.value);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>Filters</label>
        <h2 className={css.title}>Vehicle equipment</h2>
        <div className={css.wrapper}>
          <Controller
            name="AC"
            control={control}
            render={({ field }) => (
              <CheckboxButton {...field} id="AC" icon="AC" label="AC" />
            )}
          />
          <Controller
            name="engine"
            control={control}
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
        <div className={css.wrapper}>
          <Controller
            name="form"
            control={control}
            render={({ field }) => (
              <RadioGroup>
                <Radio {...field} id="van" icon="logo" label="Van" />
                <Radio
                  {...field}
                  id="fully"
                  icon="fully-integrated"
                  label="Fully Integrated"
                />
                <Radio {...field} id="alcove" icon="alcove" label="Alcove" />
              </RadioGroup>
            )}
          />
        </div>
        <Button type="submit" className={css.button}>
          Apply
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
}
