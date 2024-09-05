import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the default styles
import "../../../../Styles/Home/jobs.css";

import img1 from "../../../../utils/icons/img1.png";
import img2 from "../../../../utils/icons/img2.png";
import img3 from "../../../../utils/icons/img3.png";
import img4 from "../../../../utils/icons/img4.png";
import img5 from "../../../../utils/icons/img5.png";
import img6 from "../../../../utils/icons/img6.png";
import img7 from "../../../../utils/icons/img7.png";

const dummyJobs = [
    {
        id: 1,
        title: "Macro",
        company: "Software Building Pvt Limited",
        timePosted: "24 hours ago",
        applyLink: "/apply/macro",
        image: img1,
    },
    {
        id: 2,
        title: "Tech Innovator",
        company: "Future Tech Inc.",
        timePosted: "3 days ago",
        applyLink: "/apply/tech-innovator",
        image: img2,
    },
    {
        id: 3,
        title: "Design Guru",
        company: "Creative Minds LLC",
        timePosted: "1 week ago",
        applyLink: "/apply/design-guru",
        image: img3,
    },
    {
        id: 4,
        title: "Marketing Specialist",
        company: "Ad World Co.",
        timePosted: "2 days ago",
        applyLink: "/apply/marketing-specialist",
        image: img4,
    },
    {
        id: 5,
        title: "Data Analyst",
        company: "Data Insights Ltd.",
        timePosted: "5 days ago",
        applyLink: "/apply/data-analyst",
        image: img5,
    },
    {
        id: 6,
        title: "Project Manager",
        company: "Manage It Corp.",
        timePosted: "1 month ago",
        applyLink: "/apply/project-manager",
        image: img6,
    },
    {
        id: 7,
        title: "UX Designer",
        company: "User Experience Inc.",
        timePosted: "2 weeks ago",
        applyLink: "/apply/ux-designer",
        image: img7,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Jobs = () => {
    return (
        <div className="min-h-[70svh] bg-gradient-to-b from-[#f4eae0] to-[#d8e8f8] p-4">
            <div className="carousel-container mx-auto">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    arrows>
                    {dummyJobs.map((job) => (
                        <div className="w-[270px] bg-slate-300 py-2 px-2 flex flex-col gap-2 rounded-xl mb-4 hover:bg-slate-400 transition-colors duration-300 mx-auto">
                            <Link to={job.applyLink} key={job.id}>
                                <img
                                    alt={`${job.title} logo`}
                                    src={job.image}
                                    className="w-full h-auto object-cover rounded-md"
                                />
                                <h2 className="font-semibold text-lg">
                                    {job.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {job.company}
                                </p>
                                <h3 className="text-xs text-gray-500">
                                    {job.timePosted}
                                </h3>
                                <div className="bg-blue-500 px-2 py-1 rounded-lg text-white text-center mt-2">
                                    Apply
                                </div>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Jobs;
