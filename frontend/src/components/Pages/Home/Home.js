import React from "react";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import Video from "./components/Video";
import ResizeCards from "./components/ResizeCards";
import Internships from "./components/Internships";
// import Footer from "./components/Footer";

const Home = () => { 
    return (
        <div className="flex flex-col">
            <Hero />
            <Companies />
            <Video />
            <Jobs />
            <Internships/>
            <ResizeCards />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;