import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import Reveal from "../components/Reveal";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <Reveal>
        <h3 className="font-palanquin text-center text-4xl max-sm:text-3.5xl max-sm:leading-tight font-bold">
          What Our
          <span className="text-coral-red"> Customers</span> Say ?
        </h3>
        <p className="info-text m-auto mt-6 max-w-lg text-center leading-normal">
          Hear genuine feedback from our satisfied customers about their
          exceptional experiences with our products and services.
        </p>
      </Reveal>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <Reveal key={review.customerName}>
            <ReviewCard {...review} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
