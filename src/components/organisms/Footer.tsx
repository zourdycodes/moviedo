import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/tmovie.png";
import bgImage from "../../assets/footer-bg.jpg";

export const Footer: React.FC = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="Moviedo" />
            <Link to="/">tMovies</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
