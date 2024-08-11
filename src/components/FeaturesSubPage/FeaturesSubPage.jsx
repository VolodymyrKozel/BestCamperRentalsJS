import css from './FeaturesSubPage.module.css';
import BookingForm from '../BookingForm/BookingForm';
import Icon from '../ui/Icon/Icon';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';
import { useParams } from 'react-router-dom';
export default function FeaturesSubPage() {
  const { id } = useParams();
  const camper = useSelector(selectCamperById(id));
  const features = Object.entries(camper.details);
  return (
    <div className={css.wrapper}>
      <div className={css.features}>
        <ul className={css.list}>
          <li className={css.label}>
            <Icon className={css.icon} id="adults" width={20} height={20} />
            {camper.adults} adults
          </li>
          <li className={css.label}>
            <Icon
              className={css.icon}
              id="transmission"
              width={20}
              height={20}
            />
            <span>{camper.transmission}</span>
          </li>
          <li className={css.label}>
            <Icon className={css.icon} id="engine" width={20} height={20} />
            {camper.engine}
          </li>
          {camper.details.kitchen && (
            <li className={css.label}>
              <Icon className={css.icon} id="kitchen" width={20} height={20} />
              <span>kitchen</span>
            </li>
          )}
          <li className={css.label}>
            <Icon className={css.icon} id="beds" width={20} height={20} />
            <span>{camper.details.beds}beds</span>
          </li>
          {camper.details.airConditioner && (
            <li className={css.label}>
              <Icon className={css.icon} id="AC" width={20} height={20} />
              <span>AC</span>
            </li>
          )}
          {camper.details.CD && (
            <li className={css.label}>
              <Icon className={css.icon} id="CD" width={20} height={20} />
              <span>CD</span>
            </li>
          )}
          {features.map(([key, value]) => (
            <li className={css.label} key={key}>
              <Icon className={css.icon} id={key} width={20} height={20} />
              <span>
                {key} {value}
              </span>
            </li>
          ))}
        </ul>
        <VehicleDetails camper={camper} />
      </div>
      <BookingForm />
    </div>
  );
}
