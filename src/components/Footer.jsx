import React from "react";
import phone from "./phone-2.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.foo}>
        <div>
          <img src={phone} />
          Toll free 1800 200 1234
        </div>
      </div>
      <div>http://www.racebook.com/cripumps</div>
      <div>WWW.crigroups.com</div>
    </div>
  );
};

export default Footer;
