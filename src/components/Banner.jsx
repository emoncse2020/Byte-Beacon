import React from "react";

const Banner = () => {
  return (
    <div className="text-center ">
      <h2 className="text-3xl font-bold mb-2">
        Join the ByteBeacon Community!
      </h2>
      <p className="text-xl mb-4">
        Stay ahead with our exclusive newsletter, insights, and early access to
        new features.
      </p>
      <button className="btn btn-secondary text-gray-800 font-bold px-8 py-3">
        Sign Up For Updates
      </button>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="/community" className="text-white hover:underline">
          Explore Our Community
        </a>
        <a href="/faq-newsletter" className="text-white hover:underline">
          Why Join?
        </a>
      </div>
    </div>
  );
};

export default Banner;
