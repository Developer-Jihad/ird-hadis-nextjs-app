import Image from "next/image";
import React from "react";
import logo from "../../public/icons/home-logo.png";
import supportIcon from "../../public/icons/helping-hand.svg";

const Header = () => {
  return (
    <header className="bg-gray-100 h-[80px] z-10 fixed top-0 w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          className="m-4"
          src={logo}
          alt="ihadith logo"
          width={50}
          height={50}
        />
        <div>
          <h3 className="text-2xl bold">হাদিস সমূহ</h3>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-14 ">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Search hadith"
            className="hidden lg:block w-full bg-gray-100 rounded px-5 py-2 border border-gray-300"
            disabled
          />
          <button className="lg:hidden p-1 bg-gray-300">
            <Image
              className="m-1"
              src={supportIcon}
              alt="support-icon"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="  p-1 bg-green-500 text-white rounded-md mr-4">
          <button className=" px-3 2xl:flex justify-center items-center gap-2 hidden 2xl:block">
            সাপোর্ট করুন
            <Image
              className="m-1"
              src={supportIcon}
              alt="support-icon"
              width={30}
              height={30}
            />
          </button>
          <button className="2xl:hidden">
            <Image
              className="m-1"
              src={supportIcon}
              alt="support-icon"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
