import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col gap-5">
        <Reveal>
          <h2 className="font-palanquin text-4xl max-sm:text-3.5xl max-sm:leading-tight capitalize font-bold lg:max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h2>
          <p className="lg:max-w-lg info-text leading-normal mt-4">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className=" lg:max-w-lg leading-normal info-text">
            Each pair is a testament to our commitment to excellence, combining
            superior materials and expert craftsmanship to deliver shoes that
            not only look good but feel great.
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </Reveal>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Reveal>
          <img
            src={shoe8}
            alt="Super Quality Shoe"
            className="object-contain"
            width={570}
            height={522}
          />
        </Reveal>
      </div>
    </section>
  );
};

export default SuperQuality;
