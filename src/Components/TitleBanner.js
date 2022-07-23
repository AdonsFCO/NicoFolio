import { Parallax } from "react-scroll-parallax";
import profile from "../assets/Profile.jpg";


const Banner = () => {
  return (
    <Parallax translateX={["-100px", "200px"]}>
      <img alt="profilePicture" className="my-thing" src={profile} />
    </Parallax>
  );
};

export default Banner;
