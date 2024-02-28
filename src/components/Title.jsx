import React from "react";
import img from "./logo.png";
import styles from "./Title.module.css";
const Title = () => {
  return (
    <>
      <div className={styles.img}>
        <img src={img} alt={"not foiund"} />
        
      </div>
    </>
  );
};

export default Title;
