import React from "react";

const Settingsbar = () => {
  return (
    <div className="bg-red-300 p-7 hidden 2xl:block 2xl:col-span-2 rounded-md">
      <h1>সেটিংস</h1>

      <div>
        <h1 className="text-2xl">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
        <p className="my-5 text-justify">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
        <button className="bg-white rounded-md py-2 px-5 text-green-600">
          সাপোর্ট করুন
        </button>
      </div>
    </div>
  );
};

export default Settingsbar;
