import css from './VehicleDetails.module.css';

export default function VehicleDetails({ camper }) {
  return (
    <>
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Form </p>
          <p className={css.text}>{camper.form}</p>
        </li>
        <li className={css.item}>
          <p>Length </p>
          <p className={css.text}>{camper.length}</p>
        </li>
        <li className={css.item}>
          <p>Width </p>
          <p className={css.text}>{camper.width}</p>
        </li>
        <li className={css.item}>
          <p>Height </p>
          <p className={css.text}>{camper.height}</p>
        </li>
        <li className={css.item}>
          <p>Tank </p>
          <p className={css.text}>{camper.tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption </p>
          <p className={css.text}>{camper.consumption}</p>
        </li>
      </ul>
    </>
  );
}
