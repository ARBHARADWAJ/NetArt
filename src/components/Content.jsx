import React from "react";
import styles from "./Content.module.css";
import img1 from "./1.png";
import img2 from "./2.png";
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <img src={img1} />
      </div>

      <div className={styles.right}>
        <div className={styles.text}>
          <b>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </b>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
        </div>
        <div className={styles.img2}>
          <img src={img2} alt="" />
        </div>
        <div className={styles.text2}>
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </div>
      </div>
    </div>
  );
};

export default Content;
