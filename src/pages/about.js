import React from "react";
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });

const about = () => {
  return (
    <>
      <div
        className={`${rockSalt.className} absolute right-50 top-0 flex justify-center h-screen w-screen text-white bg-black transition-all ease-in duration-100 z-30 p-2 md:p-4`}
        aria-label="logo"
      >
        <div className="text-center">
          <div>ANTONIO</div>
          <div>PASTORIZA</div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default about;
