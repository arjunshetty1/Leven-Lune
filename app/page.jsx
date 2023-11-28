import "@/app/globals.css";
import Hero from "./Components/Hero";
import Wrapper from "./Components/Wrapper";
import ProductCard from "./Components/ProductCard";


const page = () => {
  return (
    <>
      <div className="h-full">
        <Hero />
        <Wrapper>
          <div className="justify-center items-center flex flex-col gap-4 my-10">
            <p className="font-semibold text-3xl">Lorem Ipsum Dolor Sit</p>
            <p className=" text-center text-xl w-[800px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              culpa odio? Inventore vitae incidunt temporibus rem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14 px-5 md:px-0">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default page;
