"use client";

import ProductDetailsCarpusel from "../../Components/ProductDetailsCarpusel";
import RelatedPrdScroller from "../../Components/RelatedPrdScroller";
import Wrapper from "../../Components/Wrapper";
import { usePathname } from "next/navigation";

const Product = () => {
  const router = usePathname();
  let productName = router.split("/").pop();
  
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col md:flex-row md:justify-center px-10 align-middle items-center">
          <div className="left-side md:w-2/4">
            <ProductDetailsCarpusel />
          </div>

          <div className="right-side md:w-2/4">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-semibold">{productName}</p>
              <p className="text-sm font-semibold">T&E Designers</p>
              <p className="text-sm font-semibold mt-4">MRP : $10</p>
              <p className="text-[grey]">incl of all taxes</p>
              <p className="text-[grey]">(also inclues all taxes and duties)</p>
            </div>
            <div>
              <div className="flex justify-between flex-col mt-6">
                <div className="text-base font-medium">Select Type</div>

                <div className="flex md:flex-row flex-col gap-3 mt-4">
                  <button
                    class=" cursor-not-allowed w-[6.8rem] whitespace-nowrap bg-transparent hover:bg-[grey] text-blue-600 font-semibold hover:text-white py-1 px-2 
                    border border-[red] hover:border-transparent rounded"
                  >
                    Anti-Tarnish
                  </button>
                  <button
                    class=" w-24  whitespace-nowrap bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 
                    border border-blue-500 hover:border-transparent rounded"
                  >
                    Regular
                  </button>
                </div>
                <p className="text-[red] mt-3">
                  Selected Type is not avialable
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#_"
                class="inline-flex overflow-hidden mt-8 w-52 text-white bg-gray-900 rounded group"
              >
                <span class="px-3.5 py-2  text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </span>
                <span class="pl-4 pr-5 py-2.5">Add to Cart</span>
              </a>
              <a
                href="#_"
                class="relative  items-center justify-center w-52 inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">Add to Wishlist</span>
              </a>
            </div>

            <div>
              <p className="mt-6">Product Details</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates deleniti iste quasi possimus architecto perspiciatis
                cum, corporis consectetur vero! Natus laboriosam voluptate cum
                amet laborum architecto dicta dolor deleniti corrupti
                repudiandae, optio minima fugit nam magnam at accusantium
                dolorum aliquid velit blanditiis accusamus reiciendis ducimus a.
                Porro nihil impedit rerum a pariatur minus libero quasi omnis,
                hic ea iure error odit voluptatibus reprehenderit ex tenetur
                aspernatur itaque repellat commodi. Optio quibusdam cumque
                magnam ipsum soluta ex dolor dolorem possimus adipisci!
              </p>
            </div>
          </div>
        </div>

        <div>
          <RelatedPrdScroller />
        </div>
      </Wrapper>
    </div>
  );
};

export default Product;