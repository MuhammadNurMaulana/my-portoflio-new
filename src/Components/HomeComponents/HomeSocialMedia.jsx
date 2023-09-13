import React from "react";
import { Link } from "react-router-dom";
import { SocialMedia } from "../Social";
import { FaGithubAlt } from "react-icons/fa";

export const HomeSocialMedia = () => {
  return (
    <div>
      <div className="flex gap-4 items-center text-2xl font-mono font-semibold mt-10">
        <FaGithubAlt className="animate-bounce" />
        <h1>Social Media</h1>
      </div>
      <h1 className="font-mono font-semibold mt-3">My Social Media</h1>

      <div className="grid grid-cols-3 grid-rows-1 gap-y-4 gap-x-2 lg:gap-16 xl:gap-x-32 mt-8">
        {SocialMedia.map((media) => (
          <Link to={media.path} key={media.name} className="bg-slate-400/30 p-4 flex flex-col items-center py-2 rounded-lg md:text-xl text-dark" target="_blank">
            {media.icon}
            <h1 className="font-mono font-semibold mt-2">{media.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
