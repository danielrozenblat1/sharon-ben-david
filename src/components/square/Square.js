import React, { useEffect, useRef } from 'react';
import styles from './Square.module.css';
import { Player } from '@lordicon/react';

const Square = ({ title, description,icon }) => {
  const playerRef1=useRef(null)
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
      },[])
      const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
  return (
    <div className={styles.square}>
         <div className={styles.icon}>
      <Player icon={icon} ref={playerRef1} size="100%" loop={true} onComplete={handleComplete}></Player>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Square;