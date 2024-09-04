import React from "react";
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1";
import Companies from "./components/Companies";

const Home = () => { 
    return (
        <div className=" flex flex-col">
            <Hero />
            <Companies />
            <Feature1 />
        </div>
    );
};

export default Home;