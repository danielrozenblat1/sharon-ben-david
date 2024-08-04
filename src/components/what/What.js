import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './What.module.css';
import ScrollReveal from 'scrollreveal';
import Button from '../button/Button';
const Card = ({ title, icon, description,message,text }) => {
const playerRef1=useRef(null)
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
      },[])
      const handleComplete=()=>{
        playerRef1?.current?.playFromBeginning();
      }
      useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "right", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.description}`, {
            duration: 1000,
            distance: "30px",
            origin: "bottom", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
        
          ScrollReveal().reveal(`.${styles.icon}`, {
            duration: 1000,
            distance: "30px",
            origin: "left", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
      },[])
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
      <Player icon={icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

    </div>
  );
};

export default Card;