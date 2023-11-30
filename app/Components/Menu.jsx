"use client"
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/" },
  { id: 3, name: "Collections", url: "/collections" },
  { id: 4, name: "Contact Us", url: "/" },
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
