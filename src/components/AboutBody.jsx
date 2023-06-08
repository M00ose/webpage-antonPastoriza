import React from "react";
import Image from "next/image";

export default function AboutBody(props) {
  return (
    <section className="flex flex-row gap-8">
      <div className="w-[40%]">
        <Image
          key={props.data[props.index].title}
          src={props.data[props.index].image.url}
          alt={props.data[props.index].title}
          height={200}
          width={200}
        />
      </div>
      <div className="h-full w-auto flex flex-col lg:flex-row gap-24 lg:gap-24">
        <div className="lg:w-[35%]">
          <h2 className="mb-8 text-5xl leading-relaxed">
            PARALLEL DISCONNECTIONS
          </h2>
          <p className={`flex-1 ${props.font.className} text-sm`}>
            a visual cumulation of experienced cultural, political, and personal
            events, offering a gateway to introspection, inviting spectators to
            connect with their own subconscious and find solace in the depths of
            one&apos;s own feelings and interpretations.
          </p>
        </div>
        <div className="lg:w-[35%]">
          <h2 className="mb-8 text-5xl leading-relaxed">
            THERAPEUTIC EXPRESSIONS
          </h2>
          <p className={`flex-1 ${props.font.className} text-sm`}>
            manipulating diverse texts and images, transforming them into a
            therapeutic catharsis. Each artwork is a reflection of inner
            emotions and experiences, weaving together fragments of thoughts and
            memories into a harmonious whole. Created through this
            transformative process are powerful narrative that resonate deeply
            with the human spirit.
          </p>
        </div>
      </div>
    </section>
  );
}
