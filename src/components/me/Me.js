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
        בעל תואר ראשון במנהל עסקים, בוגר לימודי תעודה בתחום - ניהול פרויקטים, כלכלת המשפחה, קורס ייעוץ משכנתאות, קורס משכנתאות מורכבות ומסורבים , קורס מימון מתקדם, ייעוץ ארגוני, הנחיית קבוצות. שירתי בצה"ל כ-30 שנה בתפקידי פיקוד והדרכה בהם עסקתי באופן מעמיק בהדרכה, הכשרה והובלה של צוותים, וזאת באינטנסיביות ובתנאי אי וודאות שפיתחו אצלי יכולת ראייה מערכתית, חשיבה אסטרטגית ויצירתיות

לתחום ייעוץ המשכנתאות וניהול כלכלת משפחה, הגעתי לאחר שנכוותי כלקוח מיועץ בו נעזרתי אני מתמחה בליווי אישי ומקצועי ללקוחות פרטיים, למשפחות ולעסקים בתהליך קבלת הלוואת המשכנתא ומתן פתרונות מותאמים אישית לצרכים ולאילוצים הכלכליים

אני מביא איתי את הניסיון והידע שצבר בתחום הכלכלי, הניהולי וההדרכה, לצד ידע אקדמאי ומגוון הכשרות בתחום הפיננסי. אני מעביר קורס יועצי משכנתאות ,סדנאות בתחום ייעוץ משכנתאות וכלכלת המשפחה בבתי ספר ולחיילים משוחררים כהכנה לאזרחות בתחום הפיננסי
        </p>
      </div>
    
    </div>

    </>
};

export default AboutMe;