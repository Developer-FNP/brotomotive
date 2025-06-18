import React, { useRef } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Form from "../components/Form";
import Badges from "./Badges";
import Shop from "./Shop";
import Choose from "./Choose";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Contact from "./Contact";
const Home = () => {
  const chooseRef = useRef(null);

  const scrollToChoose = () => {
    chooseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div className="home">
        <div className="main-head">
          <h1 id="head1">Powering Your Fleet With Trusted Used</h1>
          <h1 id="head2">HEAVY TRUCK PARTS</h1>
          <h1 id="head3">
            Fueled by <span id="spn">EXPERTISE. </span>Driven by{" "}
            <span id="spn">VALUES.</span> Powered by{" "}
            <span id="spn">TRUST.</span>
          </h1>
        </div>
        <div className="arrow-button" onClick={scrollToChoose}>
          <FaArrowRight className="arrow-icon" />
        </div>
        <Form />
      </div>
      <Badges />
      <Shop />
      <div ref={chooseRef}>
        <Choose />
      </div>
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Home;
