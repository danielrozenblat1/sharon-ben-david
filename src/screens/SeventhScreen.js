import styles from "./SeventhScreen.module.css"
import house from "../Icons/wired-outline-1708-home-safety.json"
import Button from "../components/newButton/Button"
import Box from "../components/box/Box"


const SeventhScreen=()=>{
   

return <>
<div className={styles.background}>
<div className={styles.title}>סוגי המשכנתאות בהן אני מתמחה</div>
<div className={styles.row}>
<Box title="משכנתא יד ראשונה מקבלן" icon={house}/>
<Box title="בניה עצמית" icon={house}/>
<Box title="משכנתא להרחבה" icon={house}/>
<Box title="משכנתא למחיר למשתכן" icon={house} description="היערכות נכונה לרכישת דירה עם משכנתא בפרויקט הדיור המסובסד של משרד השיכון"/>
<Box title="מחזור משכנתא" icon={house} description="התאמת המשכנתא, לאחר שכבר נלקחה, לתנאי שוק משתנים או לצרכים מתעדכנים"/>
<Box title="משכנתא הפוכה" icon={house} description="לבני הגיל השלישי המחזיקים בנכס על שמם"/>
<Box title="משכנתא פנסיונית" icon={house} description="לבני הגיל השלישי המחזיקים בנכס על שמם"/>
<Box title="משכנתא בקצב שלך" icon={house}/>
<Box title="משכנתא לכל מטרה" icon={house}/>
<Box title="משכנתא לשיפוצים" icon={house}/>
<Box title="עסקאות מורכבות" icon={house}/>
</div>
<div className={styles.description}>אני מאמין כי הניסיון והידע המקצועי שצברתי בתחום המשכנתאות , כלכלת המשפחה מאפשרים לי להעניק לכל לקוח ייעוץ מקצועי, רגיש, פרטי ועוטף מתחילת התהליך וגם לאחריו</div>
<Button text="לחצ/י כאן לעוד פרטים"/>
</div>

</>


}
export default SeventhScreen