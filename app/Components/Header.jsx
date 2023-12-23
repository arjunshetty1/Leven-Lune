"use client";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import MenuMobile from "./MenuMobile";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const { cartItems } = useSelector((state) => state.cart);
 

  return (
    <html lang="en">
      <body>
        <header
          className={`w-full h-[50px] md:h-[80px] bg-white
     flex items-center z-20 sticky top-o transition-transform
      duration-300 ${show}`}
        >
          <Wrapper className="h-[60px] flex justify-between items-center">
            <Link href={"/"}>
              <Image src={logo} className="w-[80px] md:w-[120px]" alt="logo" />
            </Link>

            <Menu />
            {mobileMenu && <MenuMobile />}

            <div className="flex items-center gap-2 text-[black]">
              <div
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center 
          cursor-pointer relative items-center"
              >
                <CiHeart className="text-[25px] md:text-[30px]" />
                <div
                  className="h-[14px] md:[18px] min-w-[14px] md:min-w-[18px] 
          rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center
          px-[2px] md:px-[5px]"
                >
                  12
                </div>
              </div>

              <Link href={"/cart"}>
                <div
                  className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center 
          cursor-pointer relative items-center"
                >
                  <BsCart className="text-[15px] md:text-[20px]" />

                  <div
                    className="h-[14px] md:[18px] min-w-[14px] md:min-w-[18px] 
          rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center
          px-[2px] md:px-[5px]"
                  >
                    {cartItems.length}
                  </div>
                </div>
              </Link>
              <div
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center 
          cursor-pointer relative items-center"
              >
                <div className="md:hidden">
                  {mobileMenu ? (
                    <IoIosClose
                      className="text-[20px]"
                      onClick={() => setmobileMenu(false)}
                    />
                  ) : (
                    <CgMenuRightAlt
                      className="text-[25px]"
                      onClick={() => setmobileMenu(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </Wrapper>
        </header>
      </body>
    </html>
  );
};

export default Header;
