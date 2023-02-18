import React from 'react';

const TopCompanies = () => {
     return (
          <div>
                <h2 className='text-2xl md:text-3xl mt-5 font-bold text-gray-600 ml-5 md:ml-16 '>Top IT Companies</h2>
               {/* <!-- component --> */}
<section class="py-10 flex justify-center items-center">
    
    <div class=" mx-auto px-4 sm:px-3">
   
        <div class="grid grid-cols-2 gap-4 md:grid-cols-6">
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                 <img src="http://amentotech.com/htmls/jobforest/images/topcompanies/img-02.png" alt="" />
            </div>
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
               <img src="http://amentotech.com/htmls/jobforest/images/topcompanies/img-01.png" alt="" />
            </div>
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
                 <img src="http://amentotech.com/htmls/jobforest/images/topcompanies/img-03.png" alt="" />
            </div>
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
               <img src="http://amentotech.com/htmls/jobforest/images/topcompanies/img-04.png" alt="" />
            </div>
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
               <img src="http://amentotech.com/htmls/jobforest/images/topcompanies/img-05.png" alt="" />
            </div>
            <div class="flex items-center justify-center p-6 col-span-1 md:col-span-2 lg:col-span-1">
               <img src="https://civi.uxper.co/wp-content/uploads/2022/11/client-logo-04.webp" alt="" />
            </div>
        </div>
    </div>
</section>
          </div>
     );
};

export default TopCompanies;