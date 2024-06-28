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
            {/* Checkbox options here */}
            <label>
              <input
                type="checkbox"
                name="categories"
                value="דיקור סיני"
                checked={formData.categories.includes('דיקור סיני')}
                onChange={handleChange}
              /> דיקור סיני
            </label>
            {/* Add more checkboxes similarly */}
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
