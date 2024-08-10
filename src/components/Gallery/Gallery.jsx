import css from './Gallery.module.css';
export default function Gallery({ gallery, name }) {
  return (
    <ul className={css.list}>
      {gallery.map((item, index) => (
        <li className={css.item} key={index}>
          <img className={css.img} key={index} src={item} alt={name + item} />
        </li>
      ))}
    </ul>
  );
}
