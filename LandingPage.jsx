import React, { useEffect, useRef } from 'react';
import './landing_style.css';
import soldiersImage from './images/soldiers.png';
import soldiersImage2 from './images/soldiers2.png';
import soldiersImage3 from './images/soldiers3.png';
import soldiersImage4 from './images/soldiers4.png';
import soldiersImage5 from './images/soldier5.png';
import soldiersImage6 from './images/soldier6.png';

const LandingPage = ({ navigateToMap }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <div className="carousel" ref={carouselRef}>
        <img src={soldiersImage} alt="soldiers" />
        <img src={soldiersImage2} alt="soldiers2" />
        <img src={soldiersImage3} alt="soldiers3" />
        <img src={soldiersImage4} alt="soldiers4" />
        <img src={soldiersImage5} alt="soldiers5" />
        <img src={soldiersImage6} alt="soldiers6" />
      </div>
      <button className="map-button" onClick={navigateToMap}>Go to Map</button>
      <div className="description">
        <h2>כאן הולך להיות הסבר על האתר</h2>
        <p>
          האתר הזה נועד לספק מידע על מטפלים באזור מסוים. ניתן לראות מפה עם מיקומים של מטפלים שונים ולחפש מטפל לפי מיקום.
          כל מטפל מציג את שמו, מספר הטלפון שלו והעיר בה הוא נמצא. ניתן להוסיף מטפלים חדשים דרך טופס יעודי ולהציג אותם במפה.
          
          המטרה של האתר היא להקל על התהליך של מציאת מטפל באזור הקרוב אליך. בעזרת המפה והמידע המסופק, ניתן לראות בצורה חזותית את המטפלים הזמינים, לבחור את המטפל המתאים לך ביותר וליצור איתו קשר במהירות.
          
          בנוסף, האתר מאפשר למטפלים עצמם להירשם ולהוסיף את המידע שלהם בקלות. כך מתאפשרת הגדלת מאגר המטפלים והנגשת השירות לציבור הרחב.
          
          בעזרת הפלטפורמה הזו, ניתן למצוא מטפלים במגוון תחומים, כולל פסיכולוגים, פיזיותרפיסטים, תזונאים ועוד. המידע נגיש וזמין לכל אחד ובכל עת, ומטרתו לשפר את איכות החיים של המשתמשים.
          
          אנו ממשיכים לשפר ולשדרג את האתר על מנת להוסיף פונקציות נוספות ולהבטיח חוויית משתמש מיטבית. אם יש לך הצעות לשיפור או שאלות, אנו תמיד כאן לעזור.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
