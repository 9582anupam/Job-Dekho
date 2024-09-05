import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../Styles/Home/jobs.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SliderTemplate = (props) => {
    const dummyJobs = props.dummyJobs;
    const responsive = props.responsive;

    const [clickedJobs, setClickedJobs] = useState({});

    const handleClick = (e, jobId) => {
        e.preventDefault();
        setClickedJobs((prev) => ({
            ...prev,
            [jobId]: !prev[jobId],
        }));
    };

    return (
        <div className="min-h-[70svh] bg-gradient-to-b from-[#f4eae0] to-[#d8e8f8] p-4">
    <div className="font-bold text-2xl text-center mb-4">Discover Your Dream Job</div>
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
                <div
                    key={job.id}
                    className="w-[270px] shadow-2xl py-2 px-2 flex flex-col rounded-xl mb-4 transition-transform duration-300 hover:scale-105 mx-auto">
                    <Link
                        to={job.applyLink}
                        className="gap-2 flex flex-col">
                        <img
                            alt={`${job.title} logo`}
                            src={job.image}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h2 className="font-semibold text-lg text-blue-600">
                            {job.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {job.company}
                        </p>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs text-gray-500">
                                {job.timePosted}
                            </h3>
                            <div className="rounded-full">
                                <IconButton
                                    className="relative mt-2"
                                    size="small"
                                    onClick={(e) => handleClick(e, job.id)}>
                                    {clickedJobs[job.id] ? (
                                        <FavoriteIcon style={{ color: "red" }} />
                                    ) : (
                                        <FavoriteIcon style={{ color: "pink" }} />
                                    )}
                                </IconButton>
                            </div>
                        </div>
                        <div className="bg-blue-500 px-2 py-1 rounded-lg text-white text-center mt-2">
                            <p>Apply</p>
                        </div>
                    </Link>
                </div>
            ))}
        </Carousel>
    </div>
</div>

    );
};

export default SliderTemplate;
