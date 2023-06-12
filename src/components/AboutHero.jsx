import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-row gap-8">
      <Image
        src="/profile.jpg"
        alt="Antonio Pastoriza"
        height={300}
        width={300}
        className="h-fit"
      />
      <div className="flex-1 h-full relative">
        <h2 className="absolute top-56 right-10">Abstract Expressionist</h2>
      </div>
      <div className="absolute top-64 bg-neutral-700 h-[1px] w-full -translate-x-2" />
    </section>
  );
}
