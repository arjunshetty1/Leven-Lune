"use client";

import Image from "next/image";
import Link from "next/link";
import c1 from "../../public/collection1.jpg";

const CollectionCard = ({ value }) => {
  return (
    <>
      <Link
        href={`ViewCollections/${value?.attributes.name}`}
        className="transition-transform duration-300 hover:scale-105"
      >
        <Image
          className="object-cover w-[22rem] h-[22rem] rounded-lg "
          src={c1}
        />
        <p className="mt-3 text-xl px-2">{value.attributes.name}</p>
      </Link>
    </>
  );
};

export default CollectionCard;
