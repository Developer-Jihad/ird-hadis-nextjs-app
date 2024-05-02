import React from "react";

const Settingsbar = () => {
  return (
    <div className="  hidden 2xl:block 2xl:col-span-2 overflow-y-auto scrollbar mb-[65px]">
      <div className="bg-white p-7 rounded-md">
        <h1 className="text-2xl text-center mb-6">সেটিংস</h1>
        <form>
          <label htmlFor="fontStyle">আরবি ফন্ট সিলেক্ট করুন</label>
          <select
            className="block w-full my-3 bg-secondary px-3 appearance-none h-9 rounded-md"
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
        <h1 className="text-2xl text-center">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
        <p className="my-5 text-justify">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
        <div className="text-center">
          <button className="bg-white rounded-md py-2 px-5 text-primary">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settingsbar;
