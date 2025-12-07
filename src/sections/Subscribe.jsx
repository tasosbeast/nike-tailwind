import Button from "../components/Button";
import Reveal from "../components/Reveal";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <Reveal className="w-full">
        <h3 className="text-4xl max-sm:text-3.5xl max-sm:leading-tight lg:max-w-md font-palanquin font-bold ">
          Sign Up for Our<span className="text-coral-red"> Newsletter</span>
        </h3>
      </Reveal>
      <Reveal className="lg:max-w-[45%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </Reveal>
    </section>
  );
};

export default Subscribe;
