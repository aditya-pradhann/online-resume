import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";

import {Header} from './Header';
import {About} from './About';
import {WorkExperience} from './WorkExperience';

const Home = () => {
  const [backgroundGradient, setBackgroundGradient] = useState(
    "radial-gradient(600px at 1225px 370px, rgba(29, 78, 216, 0.15), transparent 80%)"
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setBackgroundGradient(
        `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      );
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Aditya Pradhan | Resume</title>
      </Helmet>

      <div className="top-layout" style={{background: backgroundGradient}}></div>
      <div className="layout">
        <div className="container">
            <div className="separator gap-1">
                <div className="header">
                    <Header />
                </div>
                <div className="about py-24">
                    <About />
                    <WorkExperience />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;