import "./AboutUs.css";
import aboutImg from "../../assets/Frame14.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h2 className="about-title">About Us</h2>
      <p>
        With over 3 years of experience, we at Incubyte specialize in setting up
        captive development centers for growing startups, addressing key
        challenges and providing tailor-made solutions for your business needs.
      </p>
      <div className="aboutImgDiv">
        <img className="aboutImg" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
