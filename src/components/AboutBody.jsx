import React from "react";

export default function AboutBody(props) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col md:max-w-[30vw] lg:max-w-[40vw]">
          <h2 className="mb-8 text-2xl sm:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed xl:leading-relaxed">
            PARALLEL DISCONNECTIONS
          </h2>
          <p className={`flex-1 ${props.font.className} text-sm`}>
            a visual cumulation of experienced cultural, political, and personal
            events, offering a gateway to introspection, inviting spectators to
            connect with their own subconscious and find solace in the depths of
            one&apos;s own feelings and interpretations.
          </p>
        </div>
        <div className="flex flex-col lg:pt-24 md:max-w-[30vw] lg:max-w-[40vw]">
          <h2 className="mb-8 text-2xl sm:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed xl:leading-relaxed">
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
    </>
  );
}
