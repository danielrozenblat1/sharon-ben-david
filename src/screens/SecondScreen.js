import styles from "./SecondScreen.module.css"
import home from "../Icons/wired-outline-1006-rent.json"
import Card from "../components/what/What"
import mimun from "../Icons/wired-outline-163-graph-line-chart.json"
import leading from "../Icons/wired-outline-169-scatter-chart.json"
import building from "../Icons/wired-outline-63-home (1).json"
const SecondScreen=()=>{


    return <>
  
<div className={styles.background}>

<div className={styles.title}>המסלולים שלי</div>
<div className={styles.row}>
<Card title="בנייה עצמית" description=
"אלווה אתכם בכל שלבי הבנייה העצמית. אתכנן עמכם את התקציב, אבחר את מסלול המימון המיטבי, ואנווט בין אפשרויות המשכנתא. אסייע בהתמודדות עם אתגרי הפרויקט, כולל שחרור כספים בשלבים." icon={building} text="לעוד מידע" message="היי שרון, אשמח לשמוע עוד על בנייה עצמית "/>
<Card title="הלוואות עסקיות" description=
"אמצא עבורכם את ההלוואה העסקית המתאימה ביותר. אנתח את צרכי המימון, אבנה תיק עסקי חזק, ואנהל משא ומתן מול הגורמים המממנים. אלווה אתכם מתחילת התהליך ועד לקבלת ההלוואה." icon={mimun} text="לעוד מידע" message="היי שרון, אשמח לשמוע עוד על התהליך של הלוואה עסקית "/>


</div>
<div className={styles.row}>
<Card title="מחזור משכנתאות" description=
"אבצע ניתוח מקיף של המשכנתא הקיימת ואזהה הזדמנויות לחיסכון. אבחר עבורכם את המסלול המתאים ביותר, אשווה הצעות מבנקים שונים, ואוביל את תהליך המחזור עד לסגירת העסקה החדשה בתנאים המיטביים." icon={home} text="לעוד מידע" message="היי שרון, אשמח לשמוע עוד על מחזור משכנתא "/>

<Card title="ייעוץ פיננסי" description="אספק הדרכה ממוקדת לניהול כלכלי נכון. אבנה עמכם תקציב מאוזן, אתכנן חיסכון לטווח ארוך, ואנחה אתכם בקבלת החלטות השקעה חכמות. אעניק לכם את הכלים להשגת יציבות כלכלית ומימוש יעדיכם הפיננסיים." icon={leading} text="לעוד מידע" message="היי שרון, אשמח לשמוע עוד על ייעוץ פיננסי "/>
</div>
</div>
    </>
}
export default SecondScreen