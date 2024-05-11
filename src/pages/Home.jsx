import React from "react";
import FiltersComponents from "../components/HomePageComponents/FitlerCategory";
import Sirketler from "../components/HomePageComponents/Sirketler";
import Vacancies from "../components/Vacancies";



function Home() {
  return (
    <div>
      <FiltersComponents/>
      <Sirketler/>
      <Vacancies/>
   </div>
  );
}

export default Home;
