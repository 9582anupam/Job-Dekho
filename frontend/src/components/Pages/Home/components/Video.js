import sihVideo from "../../../../utils/video/sih-video.mp4";
import { Button, Typography } from "@mui/material";

const Video = () => {
    return (
        <div className="min-h-[60vh] my-10 flex flex-col lg:flex-row justify-between items-center mx-6 lg:mx-16 px-6 lg:px-16 bg-gradient-to-r from-[#f0f4f8] to-[#d9e6f2] rounded-lg shadow-md py-10">
            <div className="lg:max-w-[50%] w-full text-center lg:text-left mb-8 lg:mb-0 flex flex-col gap-8">
                <Typography
                    variant="h2"
                    component="h2"
                    className="text-primary mb-4 font-bold leading-tight"
                >
                    Why Choose Us ?
                </Typography>
                <Typography
                    variant="h6"
                    className="text-gray-700 mb-6 leading-relaxed "
                >
                    We connect you to top-rated companies with curated job
                    listings tailored to your skills, making job hunting simple,
                    personalized, and effective.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="text-white hover:bg-primary-dark transition duration-300 w-fit"
                >
                    Know More
                </Button>
            </div>
            <div className="w-full lg:w-[45%]">
                <video
                    className="object-contain w-full rounded-lg shadow-lg "
                    autoPlay
                    loop
                    muted
                    src={sihVideo}
                />
            </div>
        </div>
    );
};

export default Video;
