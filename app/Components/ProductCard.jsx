import Link from "next/link";
import Image from "next/image";
import { DiscountPrice } from "@/utils/helper";

const ProductCard = ({ value }) => {
  return (
    <Link
      href={`/product/${value?.attributes?.slug}`}
      className="w-[18rem] transition-transform duration-300 hover:scale-105"
    >
      <div className="w-[18rem] ">
        <Image
          src={value?.attributes?.thumbnail?.data?.attributes?.url}
          width={500}
          height={500}
          className="object-cover h-[18rem] rounded-lg"
        />
      </div>
      <div className="px-1 mt-1">
        <p className="pt-2 font-medium">{value.attributes.name}</p>
        <div className="flex justify-between mt-2">
          <div className="flex gap-4">
            <p>{value.attributes.price}</p>
            <p className="line-through">{value.attributes.original_price}</p>
          </div>
          <div className="text-[green] text-[14px]">
            {DiscountPrice(
              value.attributes.price,
              value.attributes.original_price
            )}
            %
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
