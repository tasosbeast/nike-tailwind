import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-15 max-container"
    >
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-l pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-[5.25rem] max-sm:text-[72px] max-sm:leading-[82px] font-bold leading-[1.1] z-10 animate-slide-up">
          <span className="lg:bg-white lg:whitespace-nowrap relative pr-10 inline-block">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block ">Nike</span>{" "}
          <span className="inline-block bg-white">Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap sm:flex-nowrap w-full mt-20 gap-8">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative hidden lg:flex flex-1  justify-center items-center xl:min-h-screen max-xl:py-40 max-lg:pb-40 max-lg:pt-10 bg-primary bg-cover bg-center bg-hero">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 max-lg:w-[410px] max-lg:h-[300px] animate-fade-in"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <ShoeCard
              imgURL={shoe}
              changeBigShowImage={setBigShoeImage}
              bigShowImage={bigShoeImage}
              key={shoe.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
