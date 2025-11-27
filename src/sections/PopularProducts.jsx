import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h2>Popular Products</h2>
        <p>
          Discover our most popular products, carefully selected to meet your
          needs.
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
