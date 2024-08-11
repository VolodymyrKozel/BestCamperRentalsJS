import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import Button from '../../components/ui/Button/Button';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <section className={css.hero}>
        <DocumentTitle>Home | Best Camper Rentals</DocumentTitle>
        <div className={css.content}>
          <h1 className={css.heading}>
            Explore the Great Outdoors in Comfort and Style
          </h1>
          <p className={css.subtitle}>
            Whether you're planning a weekend getaway or an epic road trip, our
            premium campers are ready to take you there. From cozy family trips
            to luxurious outdoor escapes, we have a wide range of campers to
            suit every adventure. Book your camper today and start creating
            unforgettable memories on the open road.
          </p>
          <Link to="/catalog" className={css.link}>
            <Button className={css.button} variant="primary" size="medium">
              Rent Now and Start Your Journey!
            </Button>
          </Link>
        </div>
        <img className={css.img} src="images/camper.jpg" alt="camper" />
        {/*  <Hero /> */}
      </section>
      <section className={css.howItWorks}>
        <h2 className={css.color + ' ' + css.heading}>How it works</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <h3 className={css.title}> 1. Find a camping vehicle</h3>
            <p className={css.text}>
              Choose where and when you wish to pick up the vehicle.
            </p>
          </li>
          <li>
            <h3 className={css.title}>2. Send booking request</h3>
            <p className={css.text}>
              Send a booking request for the motorhome or caravan you want to
              rent.
            </p>
          </li>
          <li className="item">
            <h3 className={css.title}>3. Check in</h3>
            <p className={css.text}>
              Finish the booking and check in when the time comes. Have a nice
              holiday!
            </p>
          </li>
        </ul>
        <div className={css.buttonWrapper}>
          <Link to="/catalog" className={css.link}>
            <Button className={css.button} variant="outline" size="medium">
              Read more about renting
            </Button>
          </Link>
          <Link to="/catalog" className={css.link}>
            <Button className={css.button} variant="primary" size="medium">
              Show all campers
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
