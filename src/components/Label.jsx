import React from "react";
import styles from "./Label.module.css";
import img from "./3.png";
const Label = () => {
  return (
    <div className={styles.con}>
      <div className={styles.title}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </div>
      <div className={styles.img3}>
        <img src={img} alt="not" />
      </div>
      <div className={styles.l}>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </div>
      <div
        style={{
          borderBottom: "1px solid red",
          width: "100%",
        }}
      ></div>
      <div style={{ textAlign: "center", fontSize: "small", width: "100%" }}>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      </div>
      <div className={styles.extra}>
        CHEMICALS & PROCESS | POWER |WATER & WASTE WATER| OILS & GAS | PHARMA |
        SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING
        | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC
        | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
      </div>
    </div>
  );
};

export default Label;
