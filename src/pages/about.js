import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Rock_Salt, Inter } from "next/font/google";
import Image from "next/image";

import { AboutBody, Footer, StaticNavbar } from "../components";

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
      <StaticNavbar font={rockSalt} />
      <motion.div
        className={`${rockSalt.className} flex flex-row gap-8 pt-24 px-8  h-[92%] w-[95%] -translate-y-2 border-neutral-900 border-[1px] rounded-lg text-white`}
      >
        <AboutBody index={index} data={artworks} font={inter} />
      </motion.div>
      <Footer />
    </div>
  );
}
