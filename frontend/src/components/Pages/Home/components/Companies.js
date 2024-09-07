import Marquee from "react-fast-marquee";
import img1 from "../../../../utils/icons/img1.png";
import img2 from "../../../../utils/icons/img2.png";
import img3 from "../../../../utils/icons/img3.png";
import img4 from "../../../../utils/icons/img4.png";
import img5 from "../../../../utils/icons/img5.png";
import img6 from "../../../../utils/icons/img6.png";
import img7 from "../../../../utils/icons/img7.png";

const Companies = () => (
    <Marquee>
      <div className="flex space-x-6 pr-6 my-10 py-10"> 
        {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Logo ${index + 1}`}
            className="h-40 shadow-2xl" 
          />
        ))}
      </div>
    </Marquee>
  );

export default Companies;
