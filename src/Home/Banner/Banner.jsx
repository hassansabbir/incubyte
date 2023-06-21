import "./Banner.css";
import bannerImg from "../../assets/Creative-team-pana1.png";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner-title">
        Welcome to <span className="theme-color">Incubyte</span>
      </h2>
      <p className="banner-description">
        Building bridges to success in the tech ecosystem.
      </p>
      <img className="banner-img" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
