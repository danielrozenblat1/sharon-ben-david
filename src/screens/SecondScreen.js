import styles from "./SecondScreen.module.css"
import home from "../Icons/wired-outline-1006-rent.json"
import Card from "../components/what/What"
import mimun from "../Icons/wired-outline-163-graph-line-chart.json"
import leading from "../Icons/wired-outline-169-scatter-chart.json"
import building from "../Icons/wired-outline-63-home (1).json"
import Button from "../components/newButton/Button"
const SecondScreen=()=>{


    return <>
  
<div className={styles.background}>
<div className={styles.title}>תחומי העיסוק שלי</div>
<div className={styles.row}>
<Card  border={true} title="ייעוץ משכנתאות" description=
"אלווה אתכם לאורך כל התהליך לקיחת המשכנתא ולאחריה." icon={home} />

<Card  border={true} title="כלכלת המשפחה" description=
"כלכלת המשפחה היא אחד הנושאים הכי חשובים היום - אני כאן כדי לעזור לכם להבין איך להתנהל נכון עם כספכם" icon={home} />


</div>
<div className={styles.row}>
<Card border={true} title="הדרכות פיננסיות" description="מעביר סדנאות/ קורסים  בנושאי:
יעוץ משכנתאות - כלכלת משפחה - ניהול כלכלי" icon={home}/>

<Card border={true} title="הלוואות עסקיות" description=
"ייעוץ למגוון סוגי ההלואות בהתאמה אישית" icon={home}/>

</div>
<div className={styles.title} id="תחומי המומחיות שלי">סוגי המשכנתאות שאני מתמחה בהן</div>


<div className={styles.row}>
<Card title="משכנתא לשיפוצים" description="אתם גרים בדירתכם, רוצים לחדש את דירתכם, לבצע שדרוג קוסמטי לדירתכם – אנו נלווה אתכם בקבלת משכנתא לשיפוץ דירתכם " icon={home}  />

<Card title="משכנתא לבנייה עצמית" description="תכנון  הינו שלב קריטי בניה עצמית – נלווה אתכם בתכנון  המשכנתא – בבניית תוכנית כלכלית מותאמת – משא ומתן –בשלב הביטחונות וחתימות – בשחרור כספי המשכנתא  לאורך כל שלבי הבניה" icon={home} />
</div>
<div className={styles.row}>

<Card title="משכנתא הפוכה" description=" נועדה לכל מטרה לגיל השלישי משכנתא הניתנת מטעם חברות הביטוח
אנו  נלווה אתכם בתכנון, במשא ומתן, בתנאים, בחתימות עד קבלת הכספים
"icon={home}  />
<Card title="משכנתא לכל מטרה" description="ברשותכם נכס 
הלוואות חונקות אותכם ?
רוצים לעזור לילדים ?
רוצים לרכוש רכב?  ריהוט?
אנו נלווה אתכם ונדאג שתקבלו משכנתא מותאמת  לכם  
" icon={home}  />

</div>
<div className={styles.row}>
<Card title="מחזור משכנתא" description="נבחן את המשכנתא הנוכחית ונבצע התאמה למשכנתא שלכם לאור תנאי השוק וזאת על מנת להתאימה למצבכם הנוכחי מתוך ראיה לצמצם עלות חודשית - עלות כוללת" icon={home}  />

<Card title="משכנתא פנסיונית" description="משכנתא לכל מטרה לגיל השלישי הנלקחת בבנק- נתאים לכם את המשכנתא לצרכים שלכם ונלווה אתכם לאורך הדרך " icon={home}  />
</div>
<div className={styles.row}>
<Card title="משכנתא להרחבה" description="רוצים להרחיב את דירתכם , יש ברשותכם היתר בניה אנו נלווה אותכם להגשת חלומכם" icon={home}  />

<Card title="משכנתא למסורבי בנקים" description="פניתם לבנק -  הבנק אמר לא!!
האם זה אומר שאין סיכוי להגשים את רצונכם ? התשובה היא לא! 
אנו נבנה תוכנית ונציג אותה לכלל הגורמים על מנת להפוך את הלא ל- כן  באמצעותנו  תגשימו את חלומכם" icon={home}  />


</div>
{/* <div className={styles.row}>
<Card title="משכנתא לכל מטרה" description="ברשותכם נכס 
הלוואות חונקות אותכם ?
רוצים לעזור לילדים ?
רוצים לרכוש רכב?  ריהוט?
אנו נלווה אתכם ונדאג שתקבלו משכנתא מותאמת  לכם  
" icon={home}  />
<Card title="משכנתא לשיפוצים" description="תכנון  הינו שלב קריטי בניה עצמית – נלווה אתכם בתכנון  המשכנתא – בבניית תוכנית כלכלית מותאמת – משא ומתן –בשלב הביטחונות וחתימות – בשחרור כספי המשכנתא  לאורך כל שלבי הבניה" icon={home}  />


</div> */}

{/* <div className={styles.row}>

<Card title="עסקאות מורכבות" description="לפני כל הלוואה לעסקה מורכבת - ננתח את העלויות הכוללות, נבין באילו עלויות החזר אתה מסוגל לעמוד ונלווה אותך עד לקבלת הכספים" icon={home}  />
<Card title="משכנתא לנדוניה" description="ילדכם רוכש דירה ואין לכם כסף לעזור אך ברשותכם דירה אנו נעזור לכם לעזור לילד באמצעות דירתכם" icon={home}  />
</div> */}

<div className={styles.title}>סוגי משכנתאות נוספים</div>
<div className={styles.row}>

<Card title="דירה בהנחה / מחיר מופחת / מחיר למשתכן" description="היערכות נכונה לרכישת דירה עם משכנתא בפרויקט הדיור המסובסד של משרד השיכון" icon={home}  />

<Card title="רכישת דירה מקבלן" description="הלוואה לרכישת דירה חדשה ישירות מחברת הבנייה, ללא בעלים קודמים. אפשרות זו הינה עבור רוכשים המעוניינים בנכס חדש לחלוטין" icon={home}  />
</div>
<div className={styles.row}>
<Card title="רכישת דירה יד שנייה" description="רכישת דירה מאדם פרטי – נלווה אתכם משלב התכנון ועד קבלת הכסף" icon={home}  />
<Card title="הלוואות גישור" description="ברשותכם דירה – רוצים לקנות וטרם מכרתם - נעזור לכם לקבל את הלוואת גישור על הנכס  הקיים" icon={home}  />
<Card title="הלוואות נדוניה" description="ילדכם רוכש דירה ואין לכם כסף לעזור אך ברשותכם דירה אנו נעזור לכם לעזור לילד באמצעות דירתכם" icon={home}  />
</div>

<div className={styles.description}>אני מאמין כי הניסיון והידע המקצועי שצברתי בתחום המשכנתאות , כלכלת המשפחה מאפשרים לי להעניק לכל לקוח ייעוץ מקצועי, רגיש, פרטי ועוטף מתחילת התהליך וגם לאחריו</div>
<Button text="לחצ/י כאן לעוד פרטים"/>


</div>
    </>
}
export default SecondScreen