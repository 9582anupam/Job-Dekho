import SliderTemplate from "../../../common/SliderTemplate";

import dummyJobs from "../../../../utils/Constants/DummyJobDetails";

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
        <div className="min-h-[70svh] bg-gradient-to-b from-[#f4eae0] to-[#d8e8f8] p-4 mb-20">
            <SliderTemplate name={"Jobs"} dummyData={dummyJobs} responsive={responsive} />
            
        </div>
    );
};

export default Jobs;
