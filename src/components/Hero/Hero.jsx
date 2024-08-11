import { ParallaxBanner } from 'react-scroll-parallax';
const Hero = () => {
  return (
    <ParallaxBanner
      layers={[{ image: 'images/camper.jpg', speed: -15 }]}
      className="aspect-[2/1]"
    />
  );
};

export default Hero;
