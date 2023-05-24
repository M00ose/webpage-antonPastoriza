import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function ArtworkCard(props) {
  return (
    <div
      className={`${inter.className} flex flex-row items-start justify-center gap-8 `}
    >
      <div className="max-h-lg max-w-lg">
        <Image
          key={props.data.title}
          src={props.data.src}
          alt="Image"
          height={props.data.height}
          width={props.data.width}
        />
      </div>
      <div className="max-w-[200px] max-h-[500px] p-2 text-white text-left overflow-y-scroll scrollbar">
        <div className="font-bold text-xl">{props.data.title}</div>
        <div className="text-xl">{props.data.dimensions}</div>
        <div className="font-italic">{props.data.media}</div>
        <div className="bg-white w-3/4 h-[0.1rem] my-4"></div>
        <div>{props.data.description}</div>
      </div>
    </div>
  );
}
