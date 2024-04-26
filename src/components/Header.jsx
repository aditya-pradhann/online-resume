import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/style.scss";

export const Header = () => {
  const social = [
    {
      iconName: faLinkedin,
      link: "https://www.linkedin.com/in/aditya-pradhan-346859157/",
    },
    { iconName: faGithub, link: "https://github.com/aditya-pradhann" },
    { iconName: faXTwitter, link: "https://twitter.com/AdiCodes07" },
  ];

  return (
    <header className="hero py-24">
      <div>
        <h1>Aditya Pradhan</h1>
        <h2>Senior Software Engineer</h2>
        <p>
          Experienced Software Developer with a proven track record of successfully driving and contributing to diverse projects across various domains. Adept at translating project requirements into tangible solutions, optimizing codebase quality, and fostering collaborative environments.
        </p>
      </div>

      <ul className="flex p-0">
        {social.map((value, index) => (
          <li className="shrink-0 mr-5" key={index}>
            <a className="social-link" href={value.link} target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={value.iconName} size="2xl" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
