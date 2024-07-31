import styles from "./ForthScreen.module.css"
import intereses from "../Icons/wired-lineal-1652-mortgage-loan.json"
import language from "../Icons/wired-lineal-969-meeting-conference-room (1).json"
import work from "../Icons/wired-lineal-999-money-check.json"
import focus from "../Icons/wired-lineal-755-invoice-receipt-validating-ticket (1).json"
import planning from "../Icons/wired-lineal-979-project-estimate.json"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { Player } from "@lordicon/react"
import Button from "../components/newButton/Button"
const ForthScreen=()=>{
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    useEffect(()=>{
  
  
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])

return <>

<div className={styles.title}>אז למה בכלל  צריך יועץ משכנתאות?</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
icon={intereses}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>אינטרסים</div>
    <div className={styles.section}>הבנקאי רואה את אינטרס הבנק  אני כיועץ רואה את אינטרס הלקוח - הלקוח במרכז ולא הבנק</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>שפת הבנקאים</div>
    <div className={styles.section}>לקוח פרטי אינו מבין את מושגי הבנק והמשמעויות  של המושגים לעומת יועץ שמבין ומדבר במושגי הבנקאי</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()}
icon={language}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()}
icon={work}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>תהליך הביצוע</div>
    <div className={styles.section}>תהליך לקיחת המשכנתא הוא תהליך שיכול להיות מורט עצבים, ארוך ומייגע ולכן , חשוב שאיש מקצוע עם ידע ונסיון יהיה איתך לאורך כל התהליך וייוודא שהאינטרסים שלך תמיד נמצאים במקום הראשון</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>חוסר התמקדות בעיקר</div>
    <div className={styles.section}>כלקוח אתה ממוקד בריביות שזה לא העיקר תפקיד היועץ להתמקד בנושאים המהותיים במשכנתא ולוודא שהבנקים לא עושים לך תרגיל</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()}
icon={focus}/>
</div>
</div>
<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()}
icon={planning}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>תכנון עסקה</div>
    <div className={styles.section}>דרש לתכנן את המימון לעסקה, לבנות תמהיל להלוואה ולקבוע את החלוקת למסלולים השונים,  בהתאם לתכנון הפיננסי ולגובה ההחזרים החודשיים. ככל שההלוואה גבוהה יותר, כך חשיבותו של התמהיל גוברת. היועץ בבנק אינו בונה תוכנית עסקית מואמת באופן מלא ללקוח</div>
</div>
</div>

</div>
<div className={styles.description}>חשוב מאוד שיועץ המשכנתא שבחרתם יהיה לא רק <strong>מקצועי</strong> , אלא אדם <strong>איכותי, אמין, קשוב, זמין</strong>,  נטול אינטרסים ושיקולים זרים.
בפגישת ההיכרות עם היועץ, מומלץ לשים לב שאיש המקצוע שבחרתם מסביר לכם את ההליך על כל שלביו בצורה מובנת וברורה ומלווה אותכם לאורך כל התהליך</div>
<Button text="לחץ כאן לשיחת ייעוץ חינמית"/>
</>
}
export default ForthScreen