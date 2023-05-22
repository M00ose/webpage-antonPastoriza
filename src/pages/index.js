import React, { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { ArtworkCard, Footer, Modal, Navbar, Socials } from "./components";
import { fetchArtworks } from "@/services";

export async function getStaticProps() {
  try {
    const { artworks } = await fetchArtworks();
    // console.log("artworks:", artworks);
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

const Index = ({ artworks }) => {
  //Set up the router for the artwork modals
  const [active, setActive] = useState("");
  let router = useRouter();

  //Set image width dynamically based on the window size
  const numImages = artworks.length;
  const imageWidth = Math.floor(90 / numImages);

  //Set the image priority onClick
  const [priority, setPriority] = useState(false);
  useLayoutEffect(() => {
    setPriority(true);
  }, []);

  useEffect(() => {
    console.log("Active:", active);
  }, [active]);

  if (!artworks) {
    return <div>Loading...</div>;
    //TODO: Add loading effect
  }
  return (
    <main className="h-screen w-screen bg-hero-pattern bg-no-repeat bg-cover overflow-hidden">
      {router.query.image && (
        <Modal onClose={() => router.push("")}>
          <ArtworkCard image={router.query.image} data={active} />
        </Modal>
      )}
      <div className="flex flex-col items-center justify-between h-full">
        <Navbar />
        <Socials />
        <div className="flex-1 flex flex-row items-center m-20 max-h-[60%] shadow-3xl">
          {artworks.map((artwork) => (
            <Link
              key={artwork.title}
              href={`/?image=${artwork.image.url}`}
              className="h-full"
            >
              <Image
                src={artwork.image.url}
                alt={artwork.title}
                height={500}
                width={500}
                priority={priority}
                className={`object-cover h-full max-w-${imageWidth}vw hover:scale-110 hover:drop-shadow-lg transition-all`}
                onClick={() => {
                  setActive({
                    dimensions: artwork.dimensions,
                    description: artwork.description,
                    height: artwork.image.height,
                    media: artwork.media,
                    src: artwork.image.url,
                    title: artwork.title,
                    width: artwork.image.width,
                    year: artwork.year,
                  });
                }}
              />
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
