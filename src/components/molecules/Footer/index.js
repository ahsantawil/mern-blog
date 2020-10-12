import React from "react";
import {
  IcDis,
  IcFb,
  IcGit,
  IcIn,
  IcTel,
  IcTw,
  LogoContoh,
} from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoContoh} alt="Logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={IcFb} />
          <Icon img={IcTw} />
          <Icon img={IcIn} />
          <Icon img={IcTel} />
          <Icon img={IcDis} />
          <Icon img={IcGit} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @ 2019 - 2020 ahsantawil. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
