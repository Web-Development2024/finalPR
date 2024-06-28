import React from 'react';
import './TherapistCard.css';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="therapist-card">
      <h3>{therapist.name}</h3>
      <p>מיקום: {therapist.location}</p>
      <p>טלפון: {therapist.phone}</p>
    </div>
  );
};

export default TherapistCard;
