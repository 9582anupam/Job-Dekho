import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { Button } from '@mui/material';

const Hero = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#eef1fa] to-[#d9e6f2] flex justify-between items-center px-8 py-8">
            <div className="w-[55%] flex flex-col gap-8">
                <p className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                    Find Your Dream Job or Internship
                </p>
                <p className="text-base lg:text-lg text-gray-700 opacity-85">
                    Explore a wide range of job and internship opportunities, practice your skills, and connect with mentors to kickstart your career.
                </p>
                <div className='flex gap-6'>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg"
                    >
                        Find Jobs
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className="bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg"
                    >
                        Find Internships
                    </Button>
                </div>
            </div>
            <div className="w-[45%] flex flex-wrap gap-6 justify-center">
                <Card icon={WorkOutlineIcon} title="Jobs" description="Explore wide range of job opportunities." />
                <Card icon={OutlinedFlagIcon} title="Internships" description="Gain valuable experience through internships." />
                <Card icon={CardMembershipIcon} title="Courses" description="Upskill yourself with certified courses." />
                <Card icon={SchoolIcon} title="Learn" description="Expand your knowledge and skills." />
                <Card icon={EmojiEventsOutlinedIcon} title="Events" description="Participate in competitions and hackathons." />
                <Card icon={ManageAccountsOutlinedIcon} title="Mentorship" description="Connect with experienced professionals for guidance." />
            </div>
        </div>
    );
};

const Card = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center w-60 h-40 px-4 py-6 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <Icon sx={{ color: "blue", fontSize: 40 }} />
        <h1 className="font-semibold text-xl text-gray-900 mt-3">{title}</h1>
        <p className="text-sm text-gray-600 text-center mt-1">
            {description}
        </p>
    </div>
);

export default Hero;
