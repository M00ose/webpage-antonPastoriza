import React from "react";
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });

export default function StaticNavbar(props) {
  return (
    <div
      className={`${props.font.className} absolute right-50 top-0 flex justify-center w-screen text-white transition-all ease-in duration-100 z-30 p-2 md:p-12`}
      aria-label="logo"
    >
      <div className="text-center">
        <div>ANTONIO</div>
        <div>PASTORIZA</div>
      </div>
    </div>
  );
}
