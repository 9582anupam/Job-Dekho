import HeroImage from "../../../../utils/icons/hero-img.jpg";

const Hero = () => {
    return (
        <div className="min-h-[calc(100svh-80px)] flex justify-between px-16 ">
            <div className="w-3/5 flex items-center mr-16 my-14">
            <div className="flex flex-col gap-3">
                <p className="text-7xl font-semibold">
                    Find Your Dream Job or Internship
                </p>
                <p>Explore a wide range of job and internship opportunities, practice your skills, and connect with mentors to kickstart your career.</p>
            </div>
            </div>
            <div className="w-2/5 flex items-center ">
                <img src={HeroImage} alt="" className="rounded-xl"></img>
            </div>
        </div>
    );
};

export default Hero;