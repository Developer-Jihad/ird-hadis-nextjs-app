"use client";

import Image from "next/image";
import settingIcon from "../../public/icons/setting-icon.svg";
import closeIcon from "@/public/icons/close-icon.svg";
import { useState } from "react";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAppDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleAppDrawer} className="pt-2 px-2 2xl:hidden">
        <Image src={settingIcon} alt="setting-icon" width={20} height={20} />
      </button>

      <div
        className={`fixed top-0 right-0 w-full bg-black bg-opacity-70 h-full z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="w-[350px] fixed top-0 right-0  drop-shadow-lg bg-white p-6 h-full overflow-auto">
          <div className="flex items-center text-black justify-between mb-4 mx-1">
            <h1 className="text-2xl ">সেটিংস</h1>

            <button onClick={handleAppDrawer}>
              <Image src={closeIcon} alt="close-icon" width={30} height={30} />
            </button>
          </div>

          <div>
            <div className="bg-white my-7 rounded-md text-black font-bold">
              <form>
                <label htmlFor="fontStyle">আরবি ফন্ট সিলেক্ট করুন</label>
                <select
                  className="block w-full my-3 border-[2px] border-secondary px-3 appearance-none h-9 rounded-md"
                  name="fontStyle"
                  id="fontStyle"
                >
                  <option value="KFGQ">KFGQ</option>
                </select>
                <br />
                <label htmlFor="vol">এরাবিক ফন্ট সাইজ</label>
                <input
                  className="block w-full my-3 bg-primary appearance-none h-2 rounded-lg"
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="50"
                />
                <br />
                <label htmlFor="vol">অনুবাদ ফন্ট সাইজ</label>
                <input
                  className="block w-full my-3 bg-primary appearance-none h-2 rounded-lg"
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="50"
                />
                <br />
                <p>নাইট মোড</p>
              </form>
            </div>
            <div className=" p-7 rounded-md mt-3 text-white bg-primary">
              <h1 className="text-2xl text-center">
                আপনিও সদাকায়ে জারিয়াতে অংশ নিন
              </h1>
              <p className="my-5 text-justify">
                আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা
                করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে
                আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ
                হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
              </p>
              <div className="text-center">
                <button className="bg-white rounded-md py-2 px-5 text-primary">
                  সাপোর্ট করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
