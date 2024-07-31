import React from 'react';
import styles from './Me.module.css';
import orel from "../../images/שרון בן דוד תדמית.png"
import Button from '../newButton/Button';
const AboutMe = () => {
  return <>
      <div className={styles.header} id="קצת עלי">מי אני?</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={orel} alt="שרון בנדה" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>שרון בן דוד</h1>
        <h2 className={styles.subtitle}>
     משכנתאות - הלוואות עסקיות - כלכלת המשפחה - הדרכות
        </h2>
        <p className={styles.description}>
       לאחר שותפות מרובת שנים בתחום וליווי של עשרות לקוחות להלוואה האידיאלית עבורם, החלטתי לצאת לדרך עצמאית לחלוטין.<br/>
      אני מביא איתי ידע,נסיון פרקטי,זמינות מוחלטת ועבודה עם גורמים מרובים <br/>
      <strong>ובעקרון, הכל כדי שאת/ה תצא עם ההלוואה האידיאלית עבורך!</strong>
        </p>
      </div>
    
    </div>

    </>
};

export default AboutMe;