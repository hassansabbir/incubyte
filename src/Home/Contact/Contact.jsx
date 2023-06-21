import "./Contact.css";
import contactImg from "../../assets/Group8.png";

const Contact = () => {
  return (
    <div className="contactSection">
      <h2 className="contactTitle">Ready to Scale Up?</h2>
      <p className="contactDescription">
        Experience the Incubyte advantage today. Let us help you navigate the
        challenges and scale up your operations smoothly and efficiently.{" "}
      </p>
      <div className="btn-div">
        <img className="inputImg" src={contactImg} alt="" />
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;
