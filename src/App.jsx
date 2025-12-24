import React from "react";
import { Navbar } from "./Navbar";
import { Landing } from "./Landing";
import Cards from "./Cards";
import Achivment from "./Achivment";
import Section1 from "./Section1";
import Advantages from "./Advantages";
import Advantages2 from "./Advantages2";
const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Cards />
      <Achivment />
      <Section1 />
      <Advantages />
      <Advantages2 />
    </div>
  );
};

export default App;
