import AboutMe from "../components/me/Me"
import Button from "../components/newButton/Button"
import Square from "../components/square/Square"
import styles from "./ThirdScreen.module.css"
import {Player} from "@lordicon/react"
import sharon from "../images/שרון בן דוד המלצות.png"
const ThirdScreen=()=>{
 

return <>
<div className={styles.background}>

<AboutMe/>
<div className={styles.title}>המלצות</div>
<div className={styles.center}><img className={styles.image} alt="שרון בן דוד" src={sharon}/></div>
<div className={styles.title}>לפני כל הלוואה אני אוודא ש</div>
<div className={styles.row}>
<Square title="תעמוד ביכולת ההחזר" description="לא תצליח לעמוד ביכולת ההחזר? לא נמשיך בתהליך ולא נכניס אותך לבור כלכלי שלא תוכל לצאת ממנו"/>
<Square title="העסקה מותאמת עבורך" description="לפני שנתחיל בתהליך ההלוואה , נבין לפי תמהיל מדוייק ומסודר מה התנאים האידיאלים שתוכל לקבל"/>
<Square title="תבין את גודל העסקה" description="חשוב לי שתבין - המשכנתא לא מסתכמת בבית עצמו - יש עוד המון עלויות מסביב שחשוב שתכיר "/>
</div>
<div className={styles.row}>
<Square title="האינטרסים שלך בראש" description="האינטרסים שלך הם האינטרסים שלי - מהרגע שהתחלנו בתהליך עד הרגע שקיבלת את המפתח לדירה אני איתך יד ביד!"/>
<Square title="תוכל לנשום אוויר" description="חשוב לי שתקח משכנתא שתוכל לעמוד בה וגם לחיות כמו בן אדם!"/>

</div>
<div className={styles.center}>    <Button text="בנדה, בוא נדבר!"/></div>


</div>
</>


}
export default ThirdScreen