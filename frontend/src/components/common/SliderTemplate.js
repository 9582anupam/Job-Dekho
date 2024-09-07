import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../Styles/Home/jobs.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SliderTemplate = (props) => {
    const name = props.name;
    const dummyData = props.dummyData;
    const responsive = props.responsive;

    const [clickedData, setClickedData] = useState({});

    const handleClick = (e, DataId) => {
        e.preventDefault();
        setClickedData((prev) => ({
            ...prev,
            [DataId]: !prev[DataId],
        }));
    };

    return (
        <div>
    <div className="font-bold text-2xl text-center mb-4">Discover Your Dream {name}</div>
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
            {dummyData.map((Data) => (
                <div
                    key={Data.id}
                    className="w-[270px] shadow-2xl py-2 px-2 flex flex-col rounded-xl mb-4 transition-transform duration-300 hover:scale-[1.1]  mx-auto">
                    <Link
                        to={Data.applyLink}
                        className="gap-2 flex flex-col">
                        <img
                            alt={`${Data.title} logo`}
                            src={Data.image}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h2 className="font-semibold text-lg text-blue-600">
                            {Data.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {Data.company}
                        </p>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs text-gray-500">
                                {Data.timePosted}
                            </h3>
                            <div className="rounded-full">
                                <IconButton
                                    className="relative mt-2"
                                    size="small"
                                    onClick={(e) => handleClick(e, Data.id)}>
                                    {clickedData[Data.id] ? (
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
