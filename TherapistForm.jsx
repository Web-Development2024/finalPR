import React, { useState } from 'react';
import './form_style.css';

const TherapistForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    categories: [],
    city: '',
    address: '',
    about: '',
    discountType: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        categories: checked
          ? [...prevData.categories, value]
          : prevData.categories.filter((category) => category !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        documents: files,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();  // Redirect back to the main page immediately

    // Below code can be kept for actual form submission if needed
    // const formEntries = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   if (key === 'documents') {
    //     Array.from(formData.documents).forEach((file) => {
    //       formEntries.append('documents', file);
    //     });
    //   } else if (key === 'categories') {
    //     formData.categories.forEach((category) => {
    //       formEntries.append('categories', category);
    //     });
    //   } else {
    //     formEntries.append(key, formData[key]);
    //   }
    // });

    // fetch('/api/therapists', {
    //   method: 'POST',
    //   body: formEntries,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     alert('Form submitted successfully!');
    //     onFormSubmit();  // Redirect back to the main page
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     alert('Form submission failed.');
    //   });
  };

  return (
    <div className="form-container">
      <h2>רישום מטפל</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">שם:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">טלפון:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="categories">תחומי טיפול:</label>
        <div id="categories" className="checkbox-container" required>
          <div className="scrollable-checkbox">
            <label><input type="checkbox" name="categories" value="דיקור סיני" checked={formData.categories.includes('דיקור סיני')} onChange={handleChange} /> דיקור סיני</label>
            <label><input type="checkbox" name="categories" value="דיקור יפני" checked={formData.categories.includes('דיקור יפני')} onChange={handleChange} /> דיקור יפני</label>
            <label><input type="checkbox" name="categories" value="טיפול שונישין לילדים" checked={formData.categories.includes('טיפול שונישין לילדים')} onChange={handleChange} /> טיפול שונישין לילדים</label>
            <label><input type="checkbox" name="categories" value="רפלקסולוגיה" checked={formData.categories.includes('רפלקסולוגיה')} onChange={handleChange} /> רפלקסולוגיה</label>
            <label><input type="checkbox" name="categories" value="שיאצו" checked={formData.categories.includes('שיאצו')} onChange={handleChange} /> שיאצו</label>
            <label><input type="checkbox" name="categories" value="טווינא" checked={formData.categories.includes('טווינא')} onChange={handleChange} /> טווינא</label>
            <label><input type="checkbox" name="categories" value="אוסטאופתיה" checked={formData.categories.includes('אוסטאופתיה')} onChange={handleChange} /> אוסטאופתיה</label>
            <label><input type="checkbox" name="categories" value="כירופרקטיקה" checked={formData.categories.includes('כירופרקטיקה')} onChange={handleChange} /> כירופרקטיקה</label>
            <label><input type="checkbox" name="categories" value="ביופידבק" checked={formData.categories.includes('ביופידבק')} onChange={handleChange} /> ביופידבק</label>
            <label><input type="checkbox" name="categories" value="הומאופתיה" checked={formData.categories.includes('הומאופתיה')} onChange={handleChange} /> הומאופתיה</label>
            <label><input type="checkbox" name="categories" value="הומוטוקסיקולוגיה" checked={formData.categories.includes('הומוטוקסיקולוגיה')} onChange={handleChange} /> הומוטוקסיקולוגיה</label>
            <label><input type="checkbox" name="categories" value="היפנוזה" checked={formData.categories.includes('היפנוזה')} onChange={handleChange} /> היפנוזה</label>
            <label><input type="checkbox" name="categories" value="נטורופתיה" checked={formData.categories.includes('נטורופתיה')} onChange={handleChange} /> נטורופתיה</label>
            <label><input type="checkbox" name="categories" value="עיסוי רפואי הוליסטי" checked={formData.categories.includes('עיסוי רפואי הוליסטי')} onChange={handleChange} /> עיסוי רפואי הוליסטי</label>
            <label><input type="checkbox" name="categories" value="שיטת פלדנקרייז" checked={formData.categories.includes('שיטת פלדנקרייז')} onChange={handleChange} /> שיטת פלדנקרייז</label>
            <label><input type="checkbox" name="categories" value="שיטת אלכסנדר" checked={formData.categories.includes('שיטת אלכסנדר')} onChange={handleChange} /> שיטת אלכסנדר</label>
            <label><input type="checkbox" name="categories" value="שיטת פאולה" checked={formData.categories.includes('שיטת פאולה')} onChange={handleChange} /> שיטת פאולה</label>
            <label><input type="checkbox" name="categories" value="עיסוי לימפטי (ניקוז לימפטי)" checked={formData.categories.includes('עיסוי לימפטי (ניקוז לימפטי)')} onChange={handleChange} /> עיסוי לימפטי (ניקוז לימפטי)</label>
            <label><input type="checkbox" name="categories" value="תמציות פרחי באך" checked={formData.categories.includes('תמציות פרחי באך')} onChange={handleChange} /> תמציות פרחי באך</label>
            <label><input type="checkbox" name="categories" value="דיכאון" checked={formData.categories.includes('דיכאון')} onChange={handleChange} /> דיכאון</label>
            <label><input type="checkbox" name="categories" value="טיפול פסיכולוגי" checked={formData.categories.includes('טיפול פסיכולוגי')} onChange={handleChange} /> טיפול פסיכולוגי</label>
            <label><input type="checkbox" name="categories" value="טיפול קוגניטיבי התנהגותי - CBT" checked={formData.categories.includes('טיפול קוגניטיבי התנהגותי - CBT')} onChange={handleChange} /> טיפול קוגניטיבי התנהגותי - CBT</label>
            <label><input type="checkbox" name="categories" value="חרדה" checked={formData.categories.includes('חרדה')} onChange={handleChange} /> חרדה</label>
            <label><input type="checkbox" name="categories" value="טיפול זוגי" checked={formData.categories.includes('טיפול זוגי')} onChange={handleChange} /> טיפול זוגי</label>
            <label><input type="checkbox" name="categories" value="הדרכת הורים" checked={formData.categories.includes('הדרכת הורים')} onChange={handleChange} /> הדרכת הורים</label>
            <label><input type="checkbox" name="categories" value="טיפול נפשי" checked={formData.categories.includes('טיפול נפשי')} onChange={handleChange} /> טיפול נפשי</label>
            <label><input type="checkbox" name="categories" value="טיפול משפחתי" checked={formData.categories.includes('טיפול משפחתי')} onChange={handleChange} /> טיפול משפחתי</label>
            <label><input type="checkbox" name="categories" value="טיפול רגשי לילדים" checked={formData.categories.includes('טיפול רגשי לילדים')} onChange={handleChange} /> טיפול רגשי לילדים</label>
            <label><input type="checkbox" name="categories" value="הפרעות שינה" checked={formData.categories.includes('הפרעות שינה')} onChange={handleChange} /> הפרעות שינה</label>
            <label><input type="checkbox" name="categories" value="הפרעות אכילה" checked={formData.categories.includes('הפרעות אכילה')} onChange={handleChange} /> הפרעות אכילה</label>
            <label><input type="checkbox" name="categories" value="אימון אישי - Coaching" checked={formData.categories.includes('אימון אישי - Coaching')} onChange={handleChange} /> אימון אישי - Coaching</label>
            <label><input type="checkbox" name="categories" value="טיפול מיני" checked={formData.categories.includes('טיפול מיני')} onChange={handleChange} /> טיפול מיני</label>
            <label><input type="checkbox" name="categories" value="פסיכותרפיה" checked={formData.categories.includes('פסיכותרפיה')} onChange={handleChange} /> פסיכותרפיה</label>
            <label><input type="checkbox" name="categories" value="מיינדפולנס" checked={formData.categories.includes('מיינדפולנס')} onChange={handleChange} /> מיינדפולנס</label>
            <label><input type="checkbox" name="categories" value="התמכרויות" checked={formData.categories.includes('התמכרויות')} onChange={handleChange} /> התמכרויות</label>
            <label><input type="checkbox" name="categories" value="טיפול במתבגרים" checked={formData.categories.includes('טיפול במתבגרים')} onChange={handleChange} /> טיפול במתבגרים</label>
            <label><input type="checkbox" name="categories" value="ייעוץ זוגי" checked={formData.categories.includes('ייעוץ זוגי')} onChange={handleChange} /> ייעוץ זוגי</label>
            <label><input type="checkbox" name="categories" value="פסיכותרפיה גופנית" checked={formData.categories.includes('פסיכותרפיה גופנית')} onChange={handleChange} /> פסיכותרפיה גופנית</label>
            <label><input type="checkbox" name="categories" value="בולמיה" checked={formData.categories.includes('בולמיה')} onChange={handleChange} /> בולמיה</label>
            <label><input type="checkbox" name="categories" value="חרדה חברתית" checked={formData.categories.includes('חרדה חברתית')} onChange={handleChange} /> חרדה חברתית</label>
            <label><input type="checkbox" name="categories" value="ADD" checked={formData.categories.includes('ADD')} onChange={handleChange} /> ADD</label>
            <label><input type="checkbox" name="categories" value="אנורקסיה" checked={formData.categories.includes('אנורקסיה')} onChange={handleChange} /> אנורקסיה</label>
            <label><input type="checkbox" name="categories" value="טיפול במצבי משבר" checked={formData.categories.includes('טיפול במצבי משבר')} onChange={handleChange} /> טיפול במצבי משבר</label>
            <label><input type="checkbox" name="categories" value="הפרעות קשב וריכוז - ADHD" checked={formData.categories.includes('הפרעות קשב וריכוז - ADHD')} onChange={handleChange} /> הפרעות קשב וריכוז - ADHD</label>
            <label><input type="checkbox" name="categories" value="העצמה אישית" checked={formData.categories.includes('העצמה אישית')} onChange={handleChange} /> העצמה אישית</label>
            <label><input type="checkbox" name="categories" value="ריפוי בעיסוק" checked={formData.categories.includes('ריפוי בעיסוק')} onChange={handleChange} /> ריפוי בעיסוק</label>
            <label><input type="checkbox" name="categories" value="קלינאות תקשורת" checked={formData.categories.includes('קלינאות תקשורת')} onChange={handleChange} /> קלינאות תקשורת</label>
            <label><input type="checkbox" name="categories" value="אבחון הפרעות קשב וריכוז" checked={formData.categories.includes('אבחון הפרעות קשב וריכוז')} onChange={handleChange} /> אבחון הפרעות קשב וריכוז</label>
            <label><input type="checkbox" name="categories" value="אבחון דידקטי" checked={formData.categories.includes('אבחון דידקטי')} onChange={handleChange} /> אבחון דידקטי</label>
            <label><input type="checkbox" name="categories" value="טיפול פסיכיאטרי" checked={formData.categories.includes('טיפול פסיכיאטרי')} onChange={handleChange} /> טיפול פסיכיאטרי</label>
            <label><input type="checkbox" name="categories" value="טיפול רגשי בעזרת בעלי חיים" checked={formData.categories.includes('טיפול רגשי בעזרת בעלי חיים')} onChange={handleChange} /> טיפול רגשי בעזרת בעלי חיים</label>
            <label><input type="checkbox" name="categories" value="טיפול באומנות" checked={formData.categories.includes('טיפול באומנות')} onChange={handleChange} /> טיפול באומנות</label>
            <label><input type="checkbox" name="categories" value="אבחון פסיכולוגי" checked={formData.categories.includes('אבחון פסיכולוגי')} onChange={handleChange} /> אבחון פסיכולוגי</label>
            <label><input type="checkbox" name="categories" value="פירוש חלומות" checked={formData.categories.includes('פירוש חלומות')} onChange={handleChange} /> פירוש חלומות</label>
            <label><input type="checkbox" name="categories" value="טיפול בדרמה" checked={formData.categories.includes('טיפול בדרמה')} onChange={handleChange} /> טיפול בדרמה</label>
            <label><input type="checkbox" name="categories" value="ייעוץ להורים" checked={formData.categories.includes('ייעוץ להורים')} onChange={handleChange} /> ייעוץ להורים</label>
            <label><input type="checkbox" name="categories" value="הפרעת אישיות גבולית" checked={formData.categories.includes('הפרעת אישיות גבולית')} onChange={handleChange} /> הפרעת אישיות גבולית</label>
            <label><input type="checkbox" name="categories" value="טיפול במוסיקה" checked={formData.categories.includes('טיפול במוסיקה')} onChange={handleChange} /> טיפול במוסיקה</label>
            <label><input type="checkbox" name="categories" value="טיפול בקשיי הגיה" checked={formData.categories.includes('טיפול בקשיי הגיה')} onChange={handleChange} /> טיפול בקשיי הגיה</label>
            <label><input type="checkbox" name="categories" value="טיפול תומך בטיפולי פוריות" checked={formData.categories.includes('טיפול תומך בטיפולי פוריות')} onChange={handleChange} /> טיפול תומך בטיפולי פוריות</label>
            <label><input type="checkbox" name="categories" value="משפחה" checked={formData.categories.includes('משפחה')} onChange={handleChange} /> משפחה</label>
            <label><input type="checkbox" name="categories" value="פוסט טראומה" checked={formData.categories.includes('פוסט טראומה')} onChange={handleChange} /> פוסט טראומה</label>
            <label><input type="checkbox" name="categories" value="טיפול התנהגותי דיאלקטי - DBT" checked={formData.categories.includes('טיפול התנהגותי דיאלקטי - DBT')} onChange={handleChange} /> טיפול התנהגותי דיאלקטי - DBT</label>
            <label><input type="checkbox" name="categories" value="NLP" checked={formData.categories.includes('NLP')} onChange={handleChange} /> NLP</label>
            <label><input type="checkbox" name="categories" value="טיפול ב-OCD" checked={formData.categories.includes('טיפול ב-OCD')} onChange={handleChange} /> טיפול ב-OCD</label>
            <label><input type="checkbox" name="categories" value="EMDR" checked={formData.categories.includes('EMDR')} onChange={handleChange} /> EMDR</label>
            <label><input type="checkbox" name="categories" value="SE - somatic experiencing" checked={formData.categories.includes('SE - somatic experiencing')} onChange={handleChange} /> SE - somatic experiencing</label>
            <label><input type="checkbox" name="categories" value="אבחון התפתחותי" checked={formData.categories.includes('אבחון התפתחותי')} onChange={handleChange} /> אבחון התפתחותי</label>
            <label><input type="checkbox" name="categories" value="אבחון נוירופסיכולוגי" checked={formData.categories.includes('אבחון נוירופסיכולוגי')} onChange={handleChange} /> אבחון נוירופסיכולוגי</label>
            <label><input type="checkbox" name="categories" value="אבחון פסיכודיאגנוסטי" checked={formData.categories.includes('אבחון פסיכודיאגנוסטי')} onChange={handleChange} /> אבחון פסיכודיאגנוסטי</label>
            <label><input type="checkbox" name="categories" value="אבחון פסיכודידקטי" checked={formData.categories.includes('אבחון פסיכודידקטי')} onChange={handleChange} /> אבחון פסיכודידקטי</label>
            <label><input type="checkbox" name="categories" value="אבחון תעסוקתי" checked={formData.categories.includes('אבחון תעסוקתי')} onChange={handleChange} /> אבחון תעסוקתי</label>
          </div>
        </div>

        <label htmlFor="city">עיר:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">כתובת:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="about">אודות:</label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="discountType">סוג הנחה:</label>
        <input
          type="text"
          id="discountType"
          name="discountType"
          value={formData.discountType}
          onChange={handleChange}
        />

        <label htmlFor="documents">העלה מסמכים:</label>
        <input
          type="file"
          id="documents"
          name="documents"
          onChange={handleChange}
          multiple
        />

        <button type="submit">שלח</button>
      </form>
    </div>
  );
};

export default TherapistForm;
