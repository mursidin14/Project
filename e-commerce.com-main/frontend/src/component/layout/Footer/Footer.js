import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Blanja<i>Yuk</i>.</h1>
        <p>Kualitas Tinggi adalah prioritas pertama kami</p>

        <p>Copyrights 2022 &copy; Mursidin</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/mursidin14/">Instagram</a>
        <a href="https://www.facebook.com/mursidin.mursidin.7731247">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
