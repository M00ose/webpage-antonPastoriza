import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <div
      className={`${inter.className} fixed h-fit w-full bottom-5 text-xs text-center text-white`}
    >
      <div className="flex flex-col sm:flex-row px-4 items-center justify-center gap-0 sm:gap-12">
        {" "}
        <div className="invisible sm:visible">/</div>
        <p>&copy; 2023, Anton Pastoriza</p>
        <div className="invisible sm:visible">/</div>
        <div className="relative group">
          <p>
            Developed by{" "}
            <a
              className="relative group hover:italic transition-all"
              href="https://github.com/M00ose"
            >
              M00ose
            </a>
          </p>
          <div className="absolute bottom-0 right-0 h-0.5 w-[36.5%] overflow-hidden">
            <div className="h-full w-full bg-white object-cover opacity-0 group-hover:opacity-100 -translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
        <div className="invisible sm:visible">/</div>
      </div>
    </div>
  );
}
