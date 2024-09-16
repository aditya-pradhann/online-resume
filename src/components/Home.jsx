import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";

import { Header } from "./Header";
import { About } from "./About";
import { WorkExperience } from "./WorkExperience";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [backgroundGradient, setBackgroundGradient] = useState(
    "radial-gradient(600px at 1225px 370px, rgba(29, 78, 216, 0.15), transparent 80%)"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const resumePath =
    "https://resume.adityapradhan.dev/static/AdityaPradhan.pdf";

    const downloadFile = async () => {
      try {
        const response = await fetch(resumePath);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        // Create a link element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AdityaPradhan.pdf';
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };

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

      <div
        className="top-layout"
        style={{ background: backgroundGradient }}
      ></div>
      <div className="layout">
        <div className="container">
          <div className="separator gap-1">
            <div className="header">
              <Header onOpenModal={openModal} />
            </div>
            <div className="about py-24">
              <About />
              <WorkExperience />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Download Resume"}
      >
        <div className="resume">
          <p className="">Link</p>
          <input type="text" value={resumePath} readOnly />

          <button
            type="button"
            className="mt-1 btn btn-primary btn-icon"
            onClick={downloadFile}
          >
            <FontAwesomeIcon icon={faCloudDownloadAlt} />
            Download
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Home;
