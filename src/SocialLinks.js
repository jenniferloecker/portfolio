import React from "react";
import "./App.css";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SocialLinks = () => {
  return (
    <div className="sidebar-social">
      <li className="social-items">
        <a
          href={"mailto:jenniferloecker@gmail.com"}
          className="social-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="social-icons" />
        </a>
      </li>
      <li className="social-items">
        <a
          href={"https://github.com/jenniferloecker"}
          className="social-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="social-icons" />
        </a>
      </li>
      <li className="social-items">
        <a
          href={"https://www.linkedin.com/in/jenloecker/"}
          className="social-links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="social-icons" />
        </a>
      </li>
    </div>
  );
};

export default SocialLinks;
