import React from "react";
import assets from '../assets/assets';

const OculusVRSection = () => {
  return (
    <div className="flex justify-center items-center bg-white px-2 py-12">
      <section className="w-full max-w-7xl py-8 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-indigo-800 to-black text-white rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 m-2">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Oculus VR</h2>
          <p className="mb-6 text-lg">
            Ullamcorper malesuada proin libero nunc consequat interdum varius
            consequat mauris nunc congue nisi vitae.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              View Offer
            </button>
            <button className="flex items-center gap-2 text-white hover:text-indigo-300 transition">
              <span className="text-xl">▶</span>
              <span className="font-semibold">Watch Video</span>
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2">
          <img
            src={assets.vrbox}
            alt="Oculus VR"
            className="w-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default OculusVRSection;
