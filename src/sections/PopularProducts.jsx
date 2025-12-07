import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import Reveal from "../components/Reveal";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <Reveal className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl max-sm:text-3.5xl max-sm:leading-tight font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg  font-montserrat text-slate-gray">
          Discover our most popular products, carefully selected to meet your
          needs.
        </p>
      </Reveal>
      <Reveal className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4  gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </Reveal>
    </section>
  );
};

export default PopularProducts;
