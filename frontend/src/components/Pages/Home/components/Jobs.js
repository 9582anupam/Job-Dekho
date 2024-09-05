import SliderTemplate from "../../../common/SliderTemplate";

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
        <div className="">
            <SliderTemplate dummyJobs={dummyJobs} responsive={responsive} />
        </div>
    );
};

export default Jobs;
