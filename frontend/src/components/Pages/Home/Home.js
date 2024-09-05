import React from "react";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import Video from "./components/Video";
import Sample from "./components/Sample";

const Home = () => { 
    return (
        <div className=" flex flex-col">
            <Hero />
            <Companies />
            <Video />
            <Jobs />
            <Sample />
        </div>
    );
};

export default Home;