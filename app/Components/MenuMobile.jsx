"use client"
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/about" },
  { id: 3, name: "Collections", url: "/" },
  { id: 4, name: "Contact Us", url: "/contact" },
  
];

const MenuMobile = () => {
  return (
    <ul
      className="w-full h-[100vh] pt-10 right-1 pl-8 bg-[black] flex flex-col gap-8 absolute top-12 md:hidden 
      font-medium text-white"
    >
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link href={item?.url}>
              <li className="cursor-pointer hover:text-[#7d7c7c]">
                {item.name}
              </li>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default MenuMobile
