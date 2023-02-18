import React from 'react';
import { FaPeopleCarry, FaSearchPlus, FaUserGraduate } from 'react-icons/fa';
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      {/* <div>
        
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">

        </div>
   
        <div class="carousel-inner relative w-full overflow-hidden">
          
          <div class="carousel-item active relative float-left w-full">
          <div class="w-full bg-cover bg-center  banner-image" style={{height: "32rem", backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}}>
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-70">
             
        </div>
    </div>
            <div class="carousel-caption  top-24  absolute text-center">
              <h5 class="text-5xl font-bold ">Find the job that fits your life</h5>
              <p className='text-lg mt-3 font-semibold text-gray-200'>Create your profile to find thousands Jobs, Build your Career & Employment!</p>
              <form>   
         
        <div class="relative mt-7">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm outline-none  text-gray-900 bg-gray-50 rounded-md       " placeholder="Search your dream jobs..." required/>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"   data-mdb-ripple="true" data-mdb-ripple-color="light" >Find Job</button>
        </div>
    </form>
            </div>
            
          </div>




        </div>
         


      </div> */}




      <div class="relative  bg-blueGray-50">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div class="absolute  top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: `url('http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/jobb/img/banner/banner-2.jpg')`
          }}>
            <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-4xl">
                  Find the job that fits your life
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build using
                    Notus JS. It features multiple CSS components based on the
                    Tailwind CSS design system.
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


