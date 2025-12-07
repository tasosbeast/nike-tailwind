import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Reveal>
          <img
            src={offer}
            alt="Special Offer"
            width={773}
            height={687}
            className="object-contain"
          />
        </Reveal>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <Reveal>
          <h2 className="font-palanquin text-4xl max-sm:text-3.5xl max-sm:leading-tight capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red">Special</span> offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text leading-normal">
            Don't miss out on our exclusive special offer! For a limited time,
            enjoy incredible discounts on our top-quality shoes.
          </p>
          <p className=" lg:max-w-lg info-text leading-normal">
            Hurry, this special offer won't last forever! Upgrade your shoe game
            today and experience the perfect blend of style, comfort, and value.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SpecialOffer;
