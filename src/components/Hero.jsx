import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              <span className="text-orange-500">I</span>gnite Your Potential
              with{" "}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">
                Byte Beacon
              </span>
            </h1>
            <p className="py-6">
              Unlock the potential of tomorrow with ByteBeacon. We craft
              intelligent solutions designed to navigate challenges, propel
              growth, and light up your path to success.
            </p>

            <div className="flex gap-8 justify-center">
              <Link
                to={"/blogs"}
                className="relative px-6 py-3 font-bold text-white rounded-lg group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-primary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute  inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-secondary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative">Read Blogs</span>
              </Link>
              <Link
                to={"/blogs"}
                className="relative px-6 py-3 font-bold text-white rounded-lg group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-primary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute  inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-secondary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative">Bookmarks</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
