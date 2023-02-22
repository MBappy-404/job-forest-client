import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaHandHoldingUsd, FaToolbox } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvaider/Auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AllJobs = () => {

  const { user } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);

 const handleAlert = () =>{
  MySwal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Please Log In Your Account and Apply!',
    
  })
 }



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
                            <button data-mdb-ripple="true" data-mdb-ripple-color="light" class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">

                              {
                                user ? <>
                              {/* <Link to='/error'>Apply</Link> */} <a href="https://codepen.io/chasekaiser/full/ogXmOK">Apply</a>
                                </> : <> <Link onClick={handleAlert} to='/signIn'>Apply</Link> </>
                              }

                            </button>
                            {/* <!-- Button trigger modal --> */}
<button
  type="button"
  class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal bg-blue-700"
  data-te-toggle="modal"
  data-te-target="#exampleModalFullscreen"
  data-te-ripple-init
  data-te-ripple-color="light">
  Launch demo modal full screen
</button>

{/* <!-- Modal --> */}
<div
  data-te-modal-init
  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalFullscreen"
  tabindex="-1"
  aria-labelledby="exampleModalFullscreenLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalFullscreenLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="relative p-4 min-[0px]:overflow-y-auto">
        <p class="px-10 text-center leading-[3rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Similique nesciunt repellat consectetur rem nam, facere,
          expedita perspiciatis accusamus beatae aliquid dicta fugit ab
          minima qui inventore. Animi tenetur tempore consequuntur!
          Ducimus, praesentium, debitis iusto repellendus deleniti
          molestias quod vero laboriosam deserunt itaque, voluptatum
          labore nihil vitae repudiandae doloribus exercitationem at
          aliquam! Nesciunt voluptatum temporibus excepturi dolores
          incidunt laudantium odio debitis. Dicta totam sunt quo corrupti
          accusamus et animi ratione consequatur molestias explicabo hic
          eligendi necessitatibus laudantium, neque velit beatae magni.
          Nemo vero blanditiis illum numquam libero necessitatibus fugiat
          officiis repellendus. Optio, quis. Earum corporis vero debitis
          unde rerum quod fuga, modi culpa veniam quos, quisquam soluta ea
          voluptatum aliquam aperiam, vitae sint molestias? Cupiditate
          quibusdam repudiandae, sapiente distinctio nihil sunt.
          Aspernatur quas sapiente saepe quo autem ullam voluptatem
          deleniti dolorum fugit tenetur incidunt obcaecati suscipit
          adipisci in nulla quam ipsam enim facilis, corrupti alias rem?
          Velit voluptatum recusandae officiis modi. Minus molestiae
          consequatur assumenda reiciendis aperiam, eius iure repellendus.
          Vel fugiat fuga quasi eos adipisci rem, necessitatibus odit
          eius, quidem mollitia eum nesciunt officiis assumenda ab
          laudantium reprehenderit quia! Consequuntur? Porro, nostrum et
          dicta quo sint non sed officia voluptatem labore, laborum
          dolores quos dolorem corporis iusto libero vel voluptate aliquid
          obcaecati distinctio itaque optio, nihil magni temporibus.
          Error, temporibus? Dolor, non? Adipisci nesciunt deleniti beatae
          esse fugiat, quisquam minus eaque animi dolor aliquam aperiam.
          Consequatur tempora amet fugit praesentium iste culpa quo,
          quaerat perspiciatis deserunt quia nisi dolores ipsum? Nemo
          incidunt quae nulla inventore aliquam alias natus iure!
          Similique omnis enim esse praesentium est veniam dolor maxime.
          Reprehenderit molestias cumque fugit dignissimos sunt sequi
          enim. Adipisci beatae blanditiis dolores. Laudantium placeat,
          asperiores tenetur praesentium beatae dignissimos magni
          voluptate iusto dicta unde iste, ratione est sint eius fuga
          consequatur eligendi iure provident. Consequuntur nobis quaerat
          error est quos obcaecati exercitationem. Necessitatibus sunt
          praesentium reiciendis tempora maiores? Asperiores similique,
          natus sed quasi ut repudiandae aliquid deserunt tempore eligendi
          repellat hic iusto eveniet neque quisquam, nulla porro, eum
          magni repellendus minima eaque! Perspiciatis omnis odio
          architecto recusandae quaerat harum vel ducimus ullam. Officiis
          dolores sapiente nihil architecto veritatis quos provident
          necessitatibus! Nostrum fugiat nisi placeat aspernatur deleniti
          explicabo ab omnis odio. Ratione. Temporibus sunt nihil expedita
          corrupti reiciendis, asperiores nostrum amet quam, totam ut
          maiores magni saepe dolore at consectetur. Autem illum quos cum
          perferendis quia voluptatibus tempore beatae quidem accusantium
          temporibus. Magnam fugiat vero maiores, repellendus, ex quaerat
          esse sunt eum itaque nihil pariatur laborum expedita veniam
          dolorum reprehenderit nostrum accusantium autem! Consequatur
          animi, quam numquam pariatur et quia odit ad. Porro provident
          excepturi veniam exercitationem cumque deleniti aperiam!
          Laudantium fugit magni, accusantium velit ipsa nostrum minima
          temporibus distinctio cum minus quis voluptas expedita ad porro
          quam earum fugiat, suscipit eius! Culpa vitae dolores labore
          fugit necessitatibus similique ex ipsa? Dolorem earum quia
          debitis quod suscipit aut nesciunt, necessitatibus error laborum
          quasi nisi a cumque asperiores voluptate, expedita, officiis
          perspiciatis ex! Ipsam optio quo deserunt magni cupiditate
          exercitationem voluptas? Animi in asperiores quos minima a,
          deleniti, facere vel ratione aut recusandae est voluptate minus.
          Reiciendis eius doloremque magni, sit harum voluptatem?
          Consectetur ad cum, rerum itaque veniam laudantium eligendi ut
          tenetur mollitia nihil praesentium voluptatem, aspernatur,
          dolorem modi?
        </p>
      </div>
      <div
        class="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss>
          Close
        </button>
      </div>
    </div>
  </div>
</div>
                            
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