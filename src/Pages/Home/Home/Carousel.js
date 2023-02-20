import React from 'react';
import { FaPeopleCarry, FaSearchPlus, FaUserGraduate } from 'react-icons/fa';
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      {/* HERO  */}
      <div class="relative  bg-blueGray-50">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div class="absolute  top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: `url('http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/jobb/img/banner/banner-2.jpg')`,height: "400px"
          }}>
            <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white text-center font-semibold text-4xl">
                  Find the job that fits your life
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">
                  Create your profile to find thousands Jobs, Build your Career & Employment!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ (0px)" }}>
            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        <div class="pb-10 bg-blueGray-200 -mt-24">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <FaSearchPlus className='w-6 h-6'></FaSearchPlus>
                    </div>
                    <h6 class="text-xl font-semibold">Search Millions of Jobs</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into parts.
                      A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-900">
                      <FaPeopleCarry className='w-6 h-6'></FaPeopleCarry>
                    </div>
                    <h6 class="text-xl font-semibold">Easy To Manage Jobs</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-12 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <FaUserGraduate className='w-6 h-6'></FaUserGraduate>
                    </div>
                    <h6 class="text-xl font-semibold">Top Careers</h6>
                    <p class="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
        </div>
      </div>
      </div>
    </div>
  );
};

export default Carousel;


