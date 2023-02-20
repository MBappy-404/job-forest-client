import React from 'react';
import { FaBroom, FaCode, FaCog, FaCoins, FaDesktop, FaGlobe } from "react-icons/fa";

const Jobs = () => {
     return (
          <div>
               <div>
                    <h2 className='text-4xl text-gray-600 text-center font-semibold'>Popular Categories</h2>

                    <div>
                         {/* <!-- component --> */}
                         <div class="px-3 md:lg:xl:px-40    py-20 bg-opacity-10">
                              <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">


                                   <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><FaCog className='w-10 h-10'></FaCog></span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Technical Support</p>
                                        <p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                                             set of people.</p>
                                   </div>

                                   <div
                                        class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
                                             <FaDesktop className='w-10 h-10'></FaDesktop>
                                        </span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Technologies</p>
                                        <p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
                                   </div>

                                   <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
                                             <FaGlobe className='w-10 h-10'></FaGlobe>
                                        </span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Sale/Marketing</p>
                                        <p class="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the
                                             top institutions worldwide.</p>
                                   </div>


                                   <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
                                             <FaBroom className='w-10 h-10'></FaBroom>
                                        </span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Art/Design</p>
                                        <p class="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
                                   </div>

                                   <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
                                             <FaCode className='h-10 w-10'></FaCode>
                                        </span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Software Development</p>
                                        <p class="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
                                             preparation.</p>
                                   </div>

                                   <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                                        <span class="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
                                             <FaCoins className='w-10 h-10'></FaCoins>
                                        </span>
                                        <p class="text-xl font-medium text-slate-700 mt-3">Business Development</p>
                                        <p class="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Jobs;