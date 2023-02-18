import React from 'react';
import AllJobs from '../AllJobs/AllJobs';
import Jobs from '../PopularJobs/Jobs';
import Carousel from './Carousel';


const Home = () => {
     return (
          <div>
              <Carousel></Carousel>
              <Jobs></Jobs>
              <AllJobs></AllJobs>
          </div>
     );
};

export default Home;