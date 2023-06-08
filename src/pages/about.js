import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Rock_Salt, Inter } from "next/font/google";
import Image from "next/image";

import { Footer } from "../components";

const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

import { fetchArtworks } from "@/services";

export async function getStaticProps() {
  try {
    const { artworks } = await fetchArtworks();
    return {
      props: {
        artworks,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return {
      props: {
        artworks: null,
      },
      revalidate: 10,
    };
  }
}

export default function About({ artworks }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % artworks.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [artworks]);

  if (!artworks) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-black h-screen w-screen overflow-hidden flex items-center justify-center">
      <div
        className={`${rockSalt.className} absolute right-50 top-0 flex justify-center w-screen text-white transition-all ease-in duration-100 z-30 p-2 md:p-12`}
        aria-label="logo"
      >
        <div className="text-center">
          <div>ANTONIO</div>
          <div>PASTORIZA</div>
        </div>
      </div>
      <motion.div
        className={`${rockSalt.className} flex flex-row gap-8 pt-24 px-8  h-[92%] w-[95%] -translate-y-2 border-neutral-900 border-[1px] rounded-lg text-white`}
      >
        <div className="w-[40%]">
          <Image
            key={artworks[index].title}
            src={artworks[index].image.url}
            alt={artworks[index].title}
            height={200}
            width={200}
          />
        </div>
        <div className="h-full w-auto flex flex-col lg:flex-row gap-24 lg:gap-24">
          <div className="lg:w-[35%]">
            <h2 className="mb-8 text-5xl leading-relaxed">
              PARALLEL DISCONNECTIONS
            </h2>
            <p className={`flex-1 ${inter.className} text-sm`}>
              a visual cumulation of experienced cultural, political, and
              personal events, offering a gateway to introspection, inviting
              spectators to connect with their own subconscious and find solace
              in the depths of one&apos;s own feelings and interpretations.
            </p>
          </div>
          <div className="lg:w-[35%]">
            <h2 className="mb-8 text-5xl leading-relaxed">
              THERAPEUTIC EXPRESSIONS
            </h2>
            <p className={`flex-1 ${inter.className} text-sm`}>
              manipulating diverse texts and images, transforming them into a
              therapeutic catharsis. Each artwork is a reflection of inner
              emotions and experiences, weaving together fragments of thoughts
              and memories into a harmonious whole. Created through this
              transformative process are powerful narrative that resonate deeply
              with the human spirit.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
