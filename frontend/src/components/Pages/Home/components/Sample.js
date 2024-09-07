import { useState } from "react";
import coursebg from "../../../../utils/icons/coursebgimg.avif";
import interviewbg from "../../../../utils/icons/interviewbg.jpg";
import commbg from "../../../../utils/icons/commbg2.jpeg";
import hackbg3 from "../../../../utils/icons/hackbg3.jpg";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";

const Sample = () => {
  const [hovered, setHovered] = useState("ONE"); // Default hover on the first div

  const cards = [
    {
      key: "ONE",
      icon: <DisplaySettingsIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Certified Courses",
      bgImage: coursebg,
      description: "Access a wide range of industry-recognized certifications to boost your career. Learn at your own pace with expert-curated materials.",
    },
    {
      key: "TWO",
      icon: <ArticleOutlinedIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Interview Preparation",
      bgImage: interviewbg,
      description: "Get ready for your dream job with comprehensive interview question sets. Practice with real-world examples and ace your interviews.",
    },
    {
      key: "THREE",
      icon: <CodeIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Coding Challenges",
      bgImage: hackbg3,
      description: "Sharpen your coding skills by solving hundreds of coding problems across various difficulty levels. Compete with others and track your progress.",
    },
    {
      key: "FOUR",
      icon: <PeopleIcon sx={{ fontSize: 40, color: "white" }} />,
      title: "Community Collaboration",
      bgImage: commbg,
      description: "Engage with a community of like-minded learners. Collaborate on projects, share knowledge, and grow together through shared learning experiences.",
    },
  ];

  return (
    <div className="flex justify-center py-14 bg-gradient-to-r from-[#eef1fa] to-[#d9e6f2]">
      <div className="flex w-5/6">
        {cards.map((card) => (
          <div
            key={card.key}
            className={`relative flex flex-col gap-3 p-4 h-[350px] rounded-lg transition-all duration-500 ease-in-out ${
              hovered === card.key || hovered === null ? "flex-grow-[2]" : "flex-grow"
            } ${hovered === card.key ? "w-[400px]" : "w-[200px]"}`}
            onMouseEnter={() => setHovered(card.key)}
            onMouseLeave={() => setHovered("ONE")}
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg before:absolute before:inset-0 before:bg-cover before:bg-center before:blur-[1.5px] before:rounded-lg"
              style={{ backgroundImage: `url(${card.bgImage})` }}
            ></div>

            {/* Content */}
            <div className="flex flex-col gap-5 relative z-11">
              <div className="bg-blue-900 max-w-fit rounded-full p-[0.30rem]">
                {card.icon}
              </div>
              <h1 className="text-blue-900 text-2xl font-semibold">{card.title}</h1>
              {hovered === card.key && (
                <p className="text-white font-semibold">{card.description}</p>
              )}
            </div>

            <div className="z-10 absolute bottom-4 left-4 px-2 py-1 rounded-2xl bg-blue-900 text-white font-semibold max-w-fit cursor-pointer">
              Start Now
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample;
