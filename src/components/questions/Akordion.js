import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../newButton/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to right, #e5c94c, #ffd770, #e5c94c, #eeba0e)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

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
    },[])
  return <>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות ותשובות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכם</div>
      <DropdownAccordion title="ניסיתי לקחת משכנתא והבנק כבר אמר לי לא,יועץ משכנתאות יכול לעזור לי לקבל משכנתא?" content="גם שהבנק אומר לא יועץ משכנתאות יכול לעזור בלהפוך את הלא לכן וישנן עוד דרכים נוספות לקבל משכנתא" />
      <DropdownAccordion title="בבנק יש לי יועץ חינם מדוע לקחת אותך?" content="היועץ בבנק רואה את אינטרס הבנק - רווחיות הבנק ,מסלולים טובים לבנק מבחינת רווחיות
אני רואה אותך במרכז ,דואג לאינטרסים שלך, בונה תוכנית מותאמת לך" />
      <DropdownAccordion title="אין לי הכנסות - מה אני יכול לעשות לגבי משכנתא?" content="ניתן לצרף ערב משלם למשכנתא - ההורים / אחים מעל גיל 18 בעלי שכר חודשי  /ילדים מעל גיל 18 יכולים" />
      <DropdownAccordion title="אני מעל גיל 60 , אני עדיין יכול לקחת משכנתא?" content="כן! מעל גיל 60 יכול לקבל משכנתא - משכנתא / משכנתא פנסיונית /משכנתא הפוכה" />
      <DropdownAccordion title="האם אני חייב לקחת משכנתא בו אני מנהל את חשבון הבנק שלי?" content=" לא!!!  ניתן לקבל משכנתא מכל גוף ,הדבר היחידי שאצטרך לעשות היא הרשאה לחיוב - הוראת קבע" />
      <DropdownAccordion title="מה חשוב לדעת על משכנתא ?" content={<>
        <div className={styles.description}>א. הלוואה הזולה ביותר  בבנקים ופריסה רחבה של שנים 
 <br/> ב. מגוון רחב של מסלולי ריבית 
 <br/> ג. עלות כוללת של המשכנתא  אל מול עלות חודשית 
 <br/>ד. לחיות עם לצד המשכנתא
 <br/> ה. ניתן לקבל משכנתא 
</div>
        </>} />

        <DropdownAccordion title="יש לי משכנתא/ הלוואה האם ניתן לקבל משכנתא?" content="ניתן לקבל  הלוואה / משכנתא בתנאי שעומד בקריטריונים של יחס החזר, אחוזי מימון" />
        <DropdownAccordion title="הדירוג האשראי שלי נמוך האם אוכל לקבל משכנתא?" content="גם כאשר הדירוג אשראי נמוך נוכל לקבל משכנתא וזה תלוי באופן הצגתו לגורמים המאשרים בבנק" />
        <DropdownAccordion title="האם אתה מלווה בשלב הביטחונות?" content="אני מלווה את הלקוחות לאורך כל התהליך כולל שלב הביטחונות והחתימות
" />
        <DropdownAccordion title="הבנק לא אישר לי משכנתא האם איתך יאשרו לי" content=" בפגישת ייעוץ נוכל ללמוד את פרטי המקרה ולהציגו בצורה הנכונה ביותר לגופי המימון על מנת לאשר משכנתא וכן  להציע לך פתרונות משתלמים, תוך הסבר מפורט להשלכות הפיננסיות לכל החלטה ודרך פעולה" />
        <DropdownAccordion title=" אני רוכש דירה חלופית ואין ברשותי הון עצמי איך ניתן להשיג את ההון?" content="במידה ואחוז המימון הינו עד 50% מערך הבית הקיים נוכל לבצע הלוואת גישור על הבית הקיים" />
    </div>

    <div className={styles.center}><Button text="שרון,אשמח לדעת עוד כמה פרטים"/></div>
 </>
}
