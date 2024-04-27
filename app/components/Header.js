import Image from "next/image";
import React from "react";
import logo from "../../public/icons/home-logo.png";
import supportIcon from "../../public/icons/helping-hand.svg";
// import settingIcon from "../../public/icons/setting-icon.svg";
import searchIcon from "../../public/icons/search.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white h-[80px] z-20 fixed top-0 w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          className="m-4"
          src={logo}
          alt="ihadith logo"
          width={50}
          height={50}
        />
        <div>
          <h3 className="text-2xl font-bold">হাদিস সমূহ</h3>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 lg:gap-14 ">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search hadith"
            className="hidden lg:block w-full bg-gray-100 rounded px-5 py-2 border border-gray-300"
            disabled
          />
          <button className="lg:hidden p-1 mt-1 rounded-md bg-gray-300">
            <Image
              className="m-1"
              src={searchIcon}
              alt="search-icon"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className=" bg-green-500 text-white rounded-md mr-4">
          <button className=" hidden px-3 py-1  justify-center items-center gap-2 2xl:block 2xl:flex">
            সাপোর্ট করুন
            <Image
              src={supportIcon}
              alt="support-icon"
              width={30}
              height={30}
            />
          </button>
          <Button></Button>
          {/* <button className="pt-2 px-2 2xl:hidden">
            <Image
              src={settingIcon}
              alt="setting-icon"
              width={27}
              height={27}
            />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
