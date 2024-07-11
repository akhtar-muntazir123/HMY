import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Instagram
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Facebook
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
