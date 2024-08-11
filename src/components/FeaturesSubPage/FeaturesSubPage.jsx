import css from './FeaturesSubPage.module.css';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
export default function FeaturesSubPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.features}></div>
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
        <Input
          className={css.input}
          name={'date'}
          type={'date'}
          placeholder="Booking date"
        />
        <textarea
          className={css.textarea}
          placeholder="Comment"
          rows={5}></textarea>
        <Button className={css.button}>Send</Button>
      </form>
    </div>
  );
}
