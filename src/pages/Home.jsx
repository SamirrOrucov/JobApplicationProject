import React from "react";
import FiltersComponents from "../components/HomePageComponents/FitlerCategory";
import Sirketler from "../components/HomePageComponents/Sirketler";
import VacancySection from "../components/HomePageComponents/VacancySection";



function Home() {
  return (
    <div>
      <FiltersComponents/>
      <Sirketler/>
      <VacancySection/>
   </div>
  );
}

export default Home;
