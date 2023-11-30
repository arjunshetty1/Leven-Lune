import ProductCard from "../Components/ProductCard";
import Wrapper from "../Components/Wrapper";

const collectionslug = () => {
  return (
    <>
      <Wrapper>
        <p className=" items-center text-center mx-auto font-semibold text-2xl">
          Earnings
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </>
  );
};

export default collectionslug;
