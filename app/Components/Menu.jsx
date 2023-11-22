"use client"
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/about" },
  { id: 3, name: "Collections", url: "/" },
  { id: 4, name: "Contact Us", url: "/contact" },
];

const Menu = () => {
  return (
    <ul
      className="hidden md:flex items-center gap-8 
    font-medium text-black"
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

export default Menu;
