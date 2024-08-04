import styles from "./FirstScreen.module.css"
import sharon from "../images/שרון בן דוד.png"

const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled? styles.backgroundP:styles.background}>

<div className={styles.description}>מקצועיות - אנושיות - אמינות - שקיפות - זמינות - איתך לאורך כל הדרך</div>
{/* <h1 className={styles.title}>שרון בן דוד</h1> */}
<div className={styles.center}><img className={styles.image} alt="שרון בן דוד" src={sharon}/></div>

</div>

</>


}
export default FirstScreen