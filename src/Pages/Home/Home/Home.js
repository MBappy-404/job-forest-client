import React from 'react';
import TopCompanies from '../../Companies/TopCompanies';
import Steps from '../../Steps/Steps';
import AllJobs from '../AllJobs/AllJobs';
import Jobs from '../PopularJobs/Jobs';
import Carousel from './Carousel';


const Home = () => {
     return (
          <div>
              <Carousel></Carousel>
              <Jobs></Jobs>
              <AllJobs></AllJobs>
              <TopCompanies></TopCompanies>
              <Steps></Steps>
          </div>
     );
};

export default Home;