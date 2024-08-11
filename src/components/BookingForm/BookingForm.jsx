import css from './BookingForm.module.css';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import DateInput from '../ui/DateInput/DateInput';
import { useState } from 'react';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';

registerLocale('en-GB', enGB);

export default function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className={css.form}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Book your campervan now</p>
      <Input
        className={css.input}
        name={'name'}
        type={'text'}
        placeholder="Name"
      />
      <Input
        className={css.input}
        name={'email'}
        type={'email'}
        placeholder="Email"
      />
      <DatePicker
        className={css.datePicker}
        closeOnScroll={true}
        locale="en-GB"
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
        /* selected={startDate} */
        onChange={date => setStartDate(date)}
        customInput={<DateInput className={css.input} />}
      />
      <textarea
        className={css.textarea}
        placeholder="Comment"
        rows={5}></textarea>
      <Button className={css.button}>Send</Button>
    </form>
  );
}
