import React from "react";
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

      <div className={styles.about_us}>
        <h1>
          With over 34 years of experience and expertise,
        </h1>
        <p>
          Los Altos Dental Care specializes in all aspects of dental care. From general dentistry to full mouth reconstructions, Los Altos Dental Care has you covered
        </p>
      </div>

    </div>
  )
};

export default Landing;