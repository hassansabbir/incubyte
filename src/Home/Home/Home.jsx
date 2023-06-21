import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Expertise from "../Expertise/Expertise";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SuccessStory from "../SuccessStory/SuccessStory";
import "./Home.css";

const Home = () => {
  return (
    <div className="root">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Expertise></Expertise>
      <SuccessStory></SuccessStory>
      <Features></Features>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
