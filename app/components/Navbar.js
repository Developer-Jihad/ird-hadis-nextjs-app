import Image from "next/image";
import React from "react";

import bookIcon from "@/public/icons/book (2).svg";
import goto from "../../public/icons/goto.svg";
import bookmark from "../../public/icons/bookmark.svg";
import subject from "../../public/icons/subject.svg";
import home from "../../public/icons/home.svg";
import others from "../../public/icons/others.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white z-10 h-[80px] fixed bottom-0 w-full lg:left-0 lg:w-[80px] lg:h-full ">
      <nav className=" flex mt-3 lg:flex-col lg:h-lvh lg:justify-center justify-evenly items-center md:gap-5 gap-3 ">
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={home}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={bookIcon}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={subject}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={bookmark}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
        <Link className=" hidden lg:block" href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={others}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            className="p-3 hover:bg-secondary rounded-md"
            src={goto}
            alt="book Icon"
            width={50}
            height={50}
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
