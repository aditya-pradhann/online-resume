import React from "react";

import "../styles/style.scss";
import workExperience from "../data/work-experience.data.json";

export const WorkExperience = () => (
  <>
    {workExperience.map((value, index) => (
      <div className="about-sec" key={index}>
        <div className="separator mb-12">
          <div className="work-month-year">
            <p>{value.duration}</p>
          </div>
          <div className="desc">
            <p className="designation">{value.title}</p>
            <p className="job-desc">{value.desc}</p>
            <div className="skills">
              {value.skills.map((skill, skillIndex) => (
                <span className='py-1 px-3' key={skillIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);
