"use client";

import ProductCard from "@/app/Components/ProductCard";
import Wrapper from "@/app/Components/Wrapper";
import { CollectionSpecificFetch } from "@/utils/api";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const page = () => {
  const [info, setinfo] = useState(null);
  const path = usePathname().split("/").pop();
  const decodedString = decodeURIComponent(path);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CollectionSpecificFetch(decodedString);
        setinfo(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-14 px-5 md:px-0">
          {info?.data?.map((value) => {
            return <ProductCard key={value.id} value={value} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default page;
