import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "./pricing.css";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h1>Idk</h1>
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div data-aos="fade-up" className="boxes">
          3
        </div>
        <div data-aos="zoom-out" className="boxes">
          4
        </div>
        <div data-aos="zoom-out-left" className="boxes">
          5
        </div>
        <div data-aos="fade-up-left" className="boxes">
          6
        </div>
        <div data-aos="fade-down-left" className="boxes">
          7
        </div>
        <div data-aos="flip-left" className="boxes">
          8
        </div>
        <div data-aos="flip-up" className="boxes">
          9
        </div>
        <div data-aos="zoom-in-right" className="boxes">
          10
        </div>
      </div>
    </div>
  );
};

export default Pricing;
