import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "../styles/style.scss";

export const Header = ({onOpenModal}) => {
  const social = [
    {
      iconName: faLinkedin,
      link: "https://www.linkedin.com/in/pradhanadi/",
    },
    { iconName: faGithub, link: "https://github.com/aditya-pradhann" },
    { iconName: faEnvelope, mailTo: "adityaa.pradhan@outlook.com" },
  ];

  const openDownloadResumeModal = () => {
    onOpenModal(true);
  }

  return (
    <header className="hero py-24">
      <div>
        <h1>Aditya Pradhan</h1>
        <h2>Senior Software Engineer</h2>
        <p>
          Experienced Software Developer specializing in delivering high-performance solutions with Angular. Proven track record of leading projects, optimizing code, and enhancing user experiences. Committed to innovation, collboration, and timely, client-focused results.
        </p>
        <div className="btn-cont mt-1">
          <button className='btn btn-primary' type="button" onClick={openDownloadResumeModal}>Resume</button>
        </div>
      </div>

      <ul className="flex p-0">
        {social.map((value, index) => (
          <li className="shrink-0 mr-5" key={index}>
            {value.link ? (
              <a
                className="social-link"
                href={value.link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={value.iconName} size="2xl" />
              </a>
            ) : (
              <a
                className="social-link"
                href={`mailto:${value.mailTo}`}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={value.iconName} size="2xl" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};
