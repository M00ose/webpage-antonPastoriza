import React from "react";
import Image from "next/image";

export default function AboutImage(props) {
  return (
    <div className="min-w-[15vw]">
      <Image
        key={props.data[props.index].title}
        src={props.data[props.index].image.url}
        alt={props.data[props.index].title}
        height={200}
        width={200}
      />
    </div>
  );
}
