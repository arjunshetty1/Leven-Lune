"use client";

import "@/app/globals.css";
import Hero from "./Components/Hero";
import Wrapper from "./Components/Wrapper";
import ProductCard from "./Components/ProductCard";
import { ProductFetch } from "../utils/api";
import { useEffect, useState } from "react";

const page = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductFetch();
        setInfo(result);
        console.log("here is the info inside the hook ", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
              <h1>{info?.data[0].attributes.name}</h1>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14 px-5 md:px-0">
            {info?.data.map((value) => {
              return <ProductCard key={value.id} value={value} />;
              
            })}
          </div>
          <h1>Damn{info?.data[2].attributes.name}</h1>
        </Wrapper>
      </div>
    </>
  );
};

export default page;

// export async function getServerSideProps() {
//   const result = await ProductFetch();
//   return {
//     props: { result },
//   };
// }
