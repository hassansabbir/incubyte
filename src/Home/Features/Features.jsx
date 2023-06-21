import "./Features.css";
import img1 from "../../assets/Frame18.png";
import img2 from "../../assets/Frame15.png";

const Features = () => {
  return (
    <div className="featureSection">
      <h2 className="featuresTitle">Our Top Features</h2>
      <p className="featureDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        laboriosam non earum saepe commodi tenetur! Provident omnis ea inventore
        officia a. Facere sunt maiores consequuntur delectus, quasi id nobis
        dolorem a autem, eligendi unde porro ab impedit dolore provident quo.
      </p>
      <div className="imgDiv">
        <img className="featureImg1" src={img1} alt="" />
        <img className="featureImg2" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Features;
