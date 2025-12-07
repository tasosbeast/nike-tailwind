import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <Reveal key={service.id}>
          <ServiceCard {...service} />
        </Reveal>
      ))}
    </section>
  );
};

export default Services;
