import Line from "../components/pipeline/Line"
import styles from "./SixthScreen.module.css"
import one from "../Icons/wired-lineal-2435-number-1.json"
import two from "../Icons/wired-lineal-2434-number-2.json"
import three from "../Icons/wired-lineal-2433-number-3.json"
import four from "../Icons/wired-lineal-2432-number-4.json"
import five from "../Icons/wired-lineal-2431-number-5 (1).json"
import six from "../Icons/wired-lineal-2430-number-6.json"
import seven from "../Icons/wired-lineal-2429-number-7.json"
import Button from "../components/newButton/Button"

const SixthScreen = () => {
    return (
      <div className={styles.container} itemscope itemtype="http://schema.org/WebPage">
        <div className={styles.title} itemprop="headline" id="תהליך העבודה איתי">תהליך העבודה איתי</div>
        <div className={styles.subTitle} itemprop="description">להלן השלבים המרכזיים בתהליך קבלת ההלוואה שלך</div>
        <Line side="right" text="שליחת מסמכים" icon={one}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description}>בשלב הראשון, תתבקש לשלוח את כל המסמכים הנדרשים לבחינת בקשת ההלוואה שלך. זה כולל תלושי משכורת, דפי חשבון בנק ומסמכים נוספים לפי הצורך.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="פגישת היכרות" icon={two}/>
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">נקיים פגישת היכרות כדי להבין את הצרכים שלך ולהסביר את תהליך ההלוואה. זו הזדמנות לשאול שאלות ולקבל מידע מפורט.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="ניתוח פיננסי" icon={three} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">הצוות שלנו יבצע ניתוח מעמיק של המצב הפיננסי שלך כדי להעריך את יכולת ההחזר ולקבוע את תנאי ההלוואה המתאימים ביותר.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="שלב הביטחונות" icon={four} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">נדון בביטחונות הנדרשים להלוואה ונסכם את הפרטים הסופיים.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="חתימות" icon={five} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">לאחר אישור ההלוואה, תוזמן לחתום על המסמכים הנדרשים.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="left" text="שחרור כסף" icon={six} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">לאחר השלמת כל השלבים, הכסף ישוחרר לחשבונך.</div>
        <div className={styles["line-divider"]}></div>
        <Line side="right" text="בדיקת כדאיות מחזור" icon={seven} />
        <div className={styles["line-divider"]}></div>
        <div className={styles.description} itemprop="description">תהליך שקורה כל שנתיים - אני מנתח את תנאי המשכנתה הקיימת, בוחן את השינויים בשוק ובמצב הכלכלי שלך כדי לקבוע האם מחזור המשכנתה יהיה כדאי עבורך או שיש לבצע שינויים  </div>
       
        <div className={styles.center}><Button text="שרון, אני אשמח שנדבר"/></div>
      </div>
    );
  };
  
  export default SixthScreen;