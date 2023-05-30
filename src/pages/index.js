import React, { useState, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { ArtworkCard, Footer, Modal, Navbar, Socials } from "../components";
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

export default function Index({ artworks }) {
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
    <main className="fixed h-screen w-screen bg-black bg-no-repeat bg-cover overflow-hidden">
      {router.query.image && (
        <Modal onClose={() => router.push("")}>
          <ArtworkCard image={router.query.image} data={active} />
        </Modal>
      )}
      <div className="flex flex-col h-full z-30">
        <Navbar />
        <Socials />
        <div className="flex-1 flex items-center justify-center z-10">
          <div className="flex flex-row items-center justify-center h-[50%] w-full mx-20 lg:mx-60 shadow-3xl">
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
        </div>
        <Footer />
      </div>
      <div className="absolute top-0 right-0 h-[70vw] w-[70vw] rounded-full bg-gradient-to-r from-white via-white to-red-700 blur-3xl opacity-30 z-0"></div>
      <div className="absolute top-0 left-30  h-[50vw] w-[50vw] rounded-full bg-blue-300 blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 translate-x-20  h-[30vw] w-[30vw] rounded-full bg-red-500 blur-3xl opacity-20 z-0"></div>
    </main>
  );
}
