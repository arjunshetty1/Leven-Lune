"use client";

import { useEffect, useState } from "react";
import { CollectionFetch } from "@/utils/api";
import CollectionCard from "../Components/CollectionCard";

const page = () => {
  const [info, setinfo] = useState(null);

  useEffect(() => {
    const CollectionData = async () => {
      try {
        const response = await CollectionFetch();
        setinfo(response);

        console.log(response);
      } catch (error) {
        console.log("errror occured,try later", error);
      }
    };
    CollectionData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto ml-12 my-10">
        {info?.data.map((value) => {
          return <CollectionCard key={value.id} value={value} />;
        })}
      </div>
    </>
  );
};

export default page;
