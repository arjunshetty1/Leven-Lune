import Image from "next/image";
import prd from "@/public/prd.jpg";

const ProductDetailsCarpusel = () => {
  return (
    
      <Image
        src={prd}
        className=" sm:py-4 sticky w-[60%]
        md:px-0 rounded-lg transition-transform duration-300 hover:scale-95"
      />
    
  );
};

export default ProductDetailsCarpusel;
