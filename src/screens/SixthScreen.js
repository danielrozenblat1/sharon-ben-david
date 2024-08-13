import Line from "../components/pipeline/Line"
import styles from "./SixthScreen.module.css"
import one from "../Icons/wired-lineal-2435-number-1.json"
import two from "../Icons/wired-lineal-2434-number-2.json"
import three from "../Icons/wired-lineal-2433-number-3.json"
import four from "../Icons/wired-lineal-2432-number-4.json"
import five from "../Icons/wired-lineal-2431-number-5 (1).json"
import six from "../Icons/wired-lineal-2430-number-6.json"
import seven from "../Icons/wired-lineal-2429-number-7.json"
import eight from "../Icons/wired-lineal-2428-number-8.json"
import nine from "../Icons/wired-lineal-2427-number-9.json"
import ten from "../Icons/wired-lineal-2426-number-10.json"
import eleven from "../Icons/wired-lineal-2425-number-11.json"

import Button from "../components/newButton/Button"

const SixthScreen = () => {
    return (
      <div className={styles.container} itemscope itemtype="http://schema.org/WebPage">
        <div className={styles.title} itemprop="headline" id="תהליך העבודה איתי">תהליך העבודה איתי</div>
        <div className={styles.subTitle} itemprop="description">להלן השלבים המרכזיים בתהליך קבלת ההלוואה שלך</div>
        <Line side="right" text="פגישת היכרות" icon={one}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">נקיים פגישת היכרות כדי להבין את הצרכים שלך ולהסביר את תהליך ההלוואה. זו הזדמנות לשאול שאלות ולקבל מידע מפורט.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="אפיון פיננסי" icon={two}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">הצוות שלנו יבצע ניתוח מעמיק של המצב הפיננסי שלך כדי להעריך את יכולת ההחזר ולקבוע את תנאי ההלוואה המתאימים ביותר.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="בניית תמהיל " icon={three} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">בניית תמהיל מותאם ללקוח לטובת ביצוע העסקה</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="פניה לבנקים" icon={four} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">נגיש מסמכים וקבלת אישור עקרוני למשכנתא</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="משא ומתן" icon={five} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">ביצוע משא ומתן עם הבנקים על הרכב המשכנתא ותנאיה</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="בחירת הצעה מותאמת ללקוח " icon={six} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">בחירת ההצעה הטובה ביותר המותאמת ללקוח מהבנק והצגתה ללקוח</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="החלטה על גוף מממן" icon={seven} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">הודעה לגוף המממן כי הוחלט ללכת איתו לעסקה</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="ליווי בשלב  הביטחונות " icon={eight} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description"> ליווי בשמאות ,בביטוחים ,בהחתמת מוכרים/ קבלן</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="חתימות בגוף מממן" icon={nine} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">לאחר אישור ההלוואה ,נגיע לבנק לחתימה על מסמכי המשכנתא</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="בדיקת העברת כספים " icon={ten} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">לאחר אישור כי התיק נבדק והוא תקין, העברת הכסף למוכרים/קבלן ובאחריותי לוודא שהכסף מועבר וליידע אתכם</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="בדיקת כדאיות מחזור כל שנתיים " icon={eleven} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">ממליץ אחת לשנתיים להתקשר ולבדוק האם כדאי לבצע מחזור משכנתא חלקי או מלא (ללא עלות)</div>
        <div className={styles.center}><Button text="שרון, אני אשמח שנדבר"/></div>
      </div>
    );
  };
  
  export default SixthScreen;