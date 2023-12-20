import Image from "next/image";
import Wrapper from "../Components/Wrapper";
import prd from "@/public/prd.jpg";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const page = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Wrapper>
      <p className="flex justify-center items-center text-lg font-semibold text-black">
        Shopping Cart
      </p>
      <div className="w-full flex md:flex-row flex-col gap-4">
        <div className=" w-[70%] left mt-11">
          {cartItems.length > 0 && <>
            <div className=" bg-[#9c9999] p-4 rounded-md  flex flex-col">
            <Image className="w-20" src={prd} />
            <div className="flex justify-between">
              <div className="ml-10">
                <p>Product Name</p>
                <p>Brand Name</p>
                <div>
                  <select
                    placeholder="Quantity"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <p>Qty</p>
                    <option value="5">1</option>
                    <option value="6">2</option>
                    <option value="7">3</option>
                    <option value="8">4</option>
                  </select>
                </div>
              </div>
              <div className="flex md:flex-col">
                <p>MRP: $100</p>
                <MdDeleteOutline />
              </div>
            </div>
          </div>
          <div className=" bg-[#9c9999] p-4 rounded-md mt-3 flex flex-col">
            <Image className="w-20" src={prd} />
            <div className="flex justify-between">
              <div className="ml-10">
                <p>Product Name</p>
                <p>Brand Name</p>
                <div>
                  <select
                    placeholder="Quantity"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <p>Qty</p>
                    <option value="5">1</option>
                    <option value="6">2</option>
                    <option value="7">3</option>
                    <option value="8">4</option>
                  </select>
                </div>
              </div>
              <div className="flex md:flex-col">
                <p>MRP: $100</p>
                <MdDeleteOutline />
              </div>
            </div>
          </div>
          <div className=" bg-[#9c9999] p-4 rounded-md mt-6 flex flex-col">
            <Image className="w-20" src={prd} />
            <div className="flex justify-between">
              <div className="ml-10">
                <p>Product Name</p>
                <p>Brand Name</p>
                <div>
                  <select
                    placeholder="Quantity"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <p>Qty</p>
                    <option value="5">1</option>
                    <option value="6">2</option>
                    <option value="7">3</option>
                    <option value="8">4</option>
                  </select>
                </div>
              </div>
              <div className="flex md:flex-col">
                <p>MRP: $100</p>
                <MdDeleteOutline />
              </div>
            </div>
          </div></>}
        </div>
        <div className="w-[30%] right">
          <div className="w-full  bg-grey rounded-lg flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="font-semibold text-base uppercase">Subtotal</p>
            </div>

            <div className="bg-[#44b8e9] p-4 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                soluta dolores quasi impedit molestiae vero quam omnis ut
                distinctio. Esse exercitationem inventore expedita sapiente
                corporis blanditiis vel natus voluptates quod?
              </p>
            </div>
            <button className=" p-4 mt-4 text-white bg-black rounded-2xl hover:bg-[#4c4b4b]">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <p>Oops...Nothing in the cart go to home and start <Link href={'/'}>Start Shoppping</Link></p>
      </div> */}
    </Wrapper>
  );
};

export default page;
