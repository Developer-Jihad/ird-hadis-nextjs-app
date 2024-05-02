import Image from "next/image";
import React from "react";
import logo from "../../public/icons/home-logo.png";
import supportIcon from "../../public/icons/helping-hand.svg";
import searchIcon from "../../public/icons/search.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white h-[64px] lg:h-[80px] lg:border-0 border-b-2 border-secondary z-20 fixed top-0 w-full flex items-center justify-between px-3 lg:px-5">
      <div className="flex items-center">
        <Image
          className="w-[36px] lg:w-[44px] mr-6"
          src={logo}
          alt="ihadith logo"
          width={50}
          height={50}
        />
        <div className="lg:hidden">
          <h3 className="text-2xl text-primary font-bold">আল হাদিস</h3>
        </div>
        <div className="hidden lg:block">
          <h3 className="text-2xl font-bold">হাদিস সমূহ</h3>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 lg:gap-14">
        <div>
          <div className="hidden lg:block w-full bg-white rounded-md px-3 py-2 border-[2px] border-secondary">
            <Image
              className="mr-3 inline-block"
              src={searchIcon}
              alt="search-icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Search hadith"
              disabled
            />
          </div>
          <button className="lg:hidden p-1 mt-1 rounded-md bg-secondary">
            <Image
              className="m-1"
              src={searchIcon}
              alt="search-icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className=" bg-primary text-white rounded-md">
          <button className=" hidden px-3 py-1 2xl:block">
            সাপোর্ট করুন
            <Image
              className="inline ml-2"
              src={supportIcon}
              alt="support-icon"
              width={30}
              height={30}
            />
          </button>
          <Button></Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
