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
      <button className="map-button" onClick={navigateToMap}>מעבר למפה</button>
      <div className="description">
        <h2>HEROCARE</h2>
        <p>
        מצדיעים לחיילי וחיילות המילואים ומציעים להם שלל טיפולים במסגרת התוכנית לטיפול רגשי וטיפול זוגי מטעם קרן הסיוע למשרתי המילואים.

        במסגרת סל ההטבות למשרתים ב"חרבות ברזל",
        במידה ושירתת למעלה מ-30 ימים בצו
        8 הינך זכאי/ת להחזר של 1500 מטעם קרן עבור מגוון טיפולים הנמצאים באתר בהנחות משמעותיות עבור משרתי המילואים.


        לטובת ההחזר מטעם הקרן:
        הסיוע יוענק למשרת מילואים ומשפחתו (בן / בת הזוג וילדים מתחת לגיל 14) ששירת 30 ימים ומעלה במסגרת צו 8 "חרבות ברזל״
        הסיוע יינתן בכפוף לתצהיר + קבלה שיגיש משרת המילואים ולא יותר מהתשלום בפועל. 
        האחריות לקבלת ההחזר היא על מגיש הבקשה בלבד, כל עוד עומד בתנאי המימוש של הקרן לסיוע

        יש לציין כי בנוסף להחזר מקרן הסיוע באתר מציע מגוון טיפולים במחירים מיוחדים עבור משרתי המילואים.

      
        </p>
        <p>
        מודים לכם על שירותכם צוות אתר ״HEROCARE”      
        </p>
      
      </div>
    </div>
  );
};

export default LandingPage;
