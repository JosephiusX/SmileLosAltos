import React from "react";
import AboutUs from "./AboutUs";
import styles from './styles/index.module.css';

const Landing = () => {
  return (
    <div>

      <div className={styles.title}>
        <h1>
          Los Altos Dental Care
        </h1>
        <p>
          Treatment that can make all the difference in the world
        </p>
      </div>

      <AboutUs />

    </div>
  )
};

export default Landing;