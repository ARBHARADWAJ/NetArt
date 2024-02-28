import React from "react";
import styles from "./App.module.css";
import Title from "./components/Title";
import Content from "./components/Content";
import Label from "./components/Label";
import Footer from "./components/Footer";
function App() {
  return (
    <div className={styles.grad}>
      <div className={styles.title}>
        <Title />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.label}>
        <Label />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
