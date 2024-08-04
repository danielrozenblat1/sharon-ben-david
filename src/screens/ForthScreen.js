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
<div className={styles.description}>לקיחת משכנתא הינה החלטה חשובה בחיינו אשר יכולה להשפיע על מצבו לאורך שנים ולקבוע את גורלנו לכן יש צורך לבצע את התהליך בחשיבה מעמיקה ומתוכננת . תהליך זה אינו פשוט וקל ויש להתחשב באתגרים שעומדים בפניכם :</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()}
icon={intereses}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>אינטרסים מנוגדים</div>
    <div className={styles.section}>הבנקאי רואה את אינטרס הבנק למכור כסף וליצור רווח לבנק תפקידי לראות את האינטרס של הלקוח להתאים לו משכנתא ייעודי לו וליצור רווח נמוך לבנק ותמהיל מותאם אישית ללקוח ובכך למנוע מצב בו המשכנתא תהיה "עול " כבד עליכם. זה לא חוכמה לקחת משכנתה – החוכמה היא לחיות צמוד להחזרי המשכנתא ולא להגיע לקריסה כלכלית</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>מושגי הפיננסים זרים לכם</div>
    <div className={styles.section}>אינכם מכירים את השפה הבנקאית , אינכם בקיאים במושגי פיננסים אשר עלולים להשפיע בצורה משמעותית על הרכב המשכנתא שלכם</div>
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

    <div className={styles.stepHeader}>תהליך קבלת המשכנתא</div>
    <div className={styles.section}>תהליך לקיחת המשכנתא הוא תהליך מורכב הדורש תכנון פיננסי תחילה ובניית תוכנית מותאמת ללקוח , ליווי צמוד לאורך כל הדרך . עיכוב בתהליך עלול להשפיע על התוצאה הסופית שנקבל על כן יש צורך ביועץ אשר ילווה אותכם צעד צעד לאורך כל התהליך וימנע מכם כאב ראש גדול ותסכול</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>התמקדות בעיקר</div>
    <div className={styles.section}>כלקוח אתה ממוקד בריביות שזה לא העיקרי במשכנתא כפי שמריבית האנשים חשובים תפקיד היועץ להתמקד בנושאים המהותיים במשכנתא ולא רק בריבית ולהביא ללקוח משכנת מותאמת לצרכיו</div>
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

    <div className={styles.stepHeader}>תכנון פיננסי</div>
    <div className={styles.section}>תהליך לקיחת הלוואת משכנתא מחייב להתחיל בשלב ניתוח פיננסי לעסקה ולמערכת הכלכלית המשפחתית אשר ישפיע על כדאיות ויכולת לביצוע עסקה בצורה מושכלת ומותאמת למשפחה. תהליך זה נעשה על ידי כשלב ראשון בתהליך . יועץ בנקאי לא מבצע תכנון פיננסי ללקוח</div>
</div>
</div>

</div>
<div className={styles.description}>חשוב מאוד שיועץ המשכנתא שבחרתם יהיה לא רק <strong>מקצועי</strong> , אלא אדם <strong>איכותי, אמין, קשוב, זמין</strong>,  נטול אינטרסים ושיקולים זרים.
בפגישת ההיכרות עם היועץ, מומלץ לשים לב שאיש המקצוע שבחרתם מסביר לכם את ההליך על כל שלביו בצורה מובנת וברורה ומלווה אותכם לאורך כל התהליך</div>
<Button text="לחץ כאן לשיחת ייעוץ חינמית"/>
</>
}
export default ForthScreen