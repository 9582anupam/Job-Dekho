import SliderTemplate from "../../../common/SliderTemplate";

import dummyInternships from "../../../../utils/Constants/DummyInternshipDetails";

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

const Internships = () => {
    return (
        <div className="min-h-[70svh] bg-gradient-to-b from-[#d8e8f8]
        to-[#f4eae0] p-4">
            <SliderTemplate name={"Internships"} dummyData={dummyInternships} responsive={responsive} />
        </div>
    );
};

export default Internships;
