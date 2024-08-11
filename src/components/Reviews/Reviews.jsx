import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import css from './Reviews.module.css';
import Icon from '../ui/Icon/Icon';
import BookingForm from '../BookingForm/BookingForm';

export default function Reviews() {
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const reviews = camper.reviews;

  return (
    <div className={css.wrapper}>
      <div className={css.reviews}>
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index} className={css.item}>
              <div className={css.header}>
                <div className={css.avatar}>
                  {review.avatarImg ? (
                    <img src={review.avatarImg} alt={review.reviewer_name} />
                  ) : (
                    <span className={css.initials}>
                      {review.reviewer_name[0]}
                    </span>
                  )}
                </div>
                <div>
                  <p className={css.author}>{review.reviewer_name}</p>
                  <p className={css.rating}>
                    {Array.from(
                      { length: review.reviewer_rating },
                      (_, index) => (
                        <Icon
                          className={css.iconStar}
                          key={index}
                          id="star"
                          width={20}
                          height={20}
                        />
                      )
                    )}
                  </p>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <BookingForm />
    </div>
  );
}
