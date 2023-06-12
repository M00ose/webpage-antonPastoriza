import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Rock_Salt, Inter } from "next/font/google";
import Image from "next/image";

import { AboutBody, AboutHero, Footer, StaticNavbar } from "../components";

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
    <div className="bg-black min-h-screen min-w-screen overflow-hidden overflow-y-scroll flex items-center justify-center no-scrollbar">
      <StaticNavbar font={rockSalt} />
      <motion.div
        className={`${rockSalt.className} flex flex-col items-center justify-center gap-12 pt-24 px-8 min-h-[92vh] min-w-[94vw] -translate-y-2 border-neutral-700 border-[1px] rounded-lg text-white`}
      >
        <AboutHero />
        {/* <AboutBody index={index} data={artworks} font={inter} /> */}
      </motion.div>
      <Footer />
    </div>
  );
}
