import React from "react";
import Link from "next/link";

import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

const socials = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/",
    icon: <CiFacebook />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/",
    icon: <CiInstagram />,
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/",
    icon: <CiLinkedin />,
  },
];
const Socials = () => {
  return (
    <div className="absolute top-10 right-10">
      <div className="flex flex-col h-fit">
        {socials.map((social) => (
          <Link
            href={social.url}
            key={social.label}
            aria-label={social.label}
            className="text-2xl hover:scale-150 hover:-translate-x-1 hover:my-2 transition-all"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
