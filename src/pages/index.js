import React from "react";
import Image from "next/image";
import { Footer, Navbar, Socials } from "./components";

import { fetchArtworks } from "@/services";

export async function getStaticProps() {
  try {
    const { artworks } = await fetchArtworks();
    console.log("artworks:", artworks);
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

const index = ({ artworks }) => {
  const numImages = artworks.length;
  const imageWidth = Math.floor(90 / numImages);
  console.log(imageWidth);

  if (!artworks) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      {/* <Navbar /> */}
      <Socials />
      <div className="h-screen w-screen flex flex-row p-20 bg-black">
        {artworks.map((artwork) => (
          <div key={artwork.title} className="h-[36rem]">
            <Image
              src={artwork.image.url}
              alt={artwork.title}
              height={500}
              width={500}
              className={`object-cover h-full max-w-${imageWidth}vw hover:scale-110 hover:drop-shadow-lg transition-all`}
            />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default index;
