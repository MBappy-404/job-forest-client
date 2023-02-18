import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaHandHoldingUsd, FaToolbox } from 'react-icons/fa';

const AllJobs = () => {

  const { data: allJobs = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
         const res = await fetch('https://job-forest-server.vercel.app/allJobs');
         const data = await res.json();
         return data;
    }

})
  
     return (
          <div>
           {
            allJobs.map(jobs => <div key={jobs.category_id} >

{/* <!-- component --> */}
<section class="">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-bold text-gray-600 capitalize lg:text-4xl ">{jobs.category_name}</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2  lg:mx-28">
        {/* <!-- component --> */}
          {
            jobs.category_jobs.map(job => <div key={job.job_id}>

<div class="rounded-md w-full bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
  <div class="flex flex-col justify-start">
    <div class="flex justify-between items-center w-full">
      <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
        <svg class="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <span>{job.position_name}</span>
      </div>
      <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">{job.job_type}</span>
    </div>
    <div class="text-sm text-gray-500 flex space-x-1 items-center">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      <span>{job.job_location}</span>
    </div>
    <div class="text-sm text-gray-500 flex space-x-1 items-center">
      <FaToolbox className='w-4 h-4 ml-1 my-2 mr-1'></FaToolbox>
      <span>{job.company_name}</span>
    </div>
    <div class="text-sm text-gray-500 flex space-x-1 items-center">
      <FaHandHoldingUsd className='w-5 h-5 ml-1'></FaHandHoldingUsd>
      <span>{job.salary}</span>
    </div>
    <div>
      <div class="mt-5">
        <button data-mdb-ripple="true" data-mdb-ripple-color="light" class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">Apply</button>
      </div>
    </div>
  </div>
</div>

            </div>)
          }

    

        </div>
    </div>
</section>
             

            </div>)
           }
          </div>
     );
};

export default AllJobs;