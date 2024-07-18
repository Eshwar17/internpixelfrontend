import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Grapplers.css';

const Grapplers = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbxx6pEpDKI6dq397FVEiAqwDMSpjF5ErCvuhAmn2VniP2XXrzQYsUIMWTwID4fhWfNXyw/exec');
        const data = response.data.data;
        const badgeData = data.slice(1); // remove the header row
        setBadges(badgeData);
        console.log(badgeData);

        // Load LinkedIn script after 3 seconds
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = "https://platform.linkedin.com/badges/js/profile.js";
          script.async = true;
          script.defer = true;
          script.type = "text/javascript";
          document.body.appendChild(script);
        }, 2000);
      } catch (error) {
        console.error('Error fetching badge data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body-container">
      <div className="badge-slider">
        <div className="badge-track" style={{ width: `calc(350px * ${badges.length})`, animationDuration: `${badges.length*4}s` }}>
          {badges.map((badge, index) => (
            <div className="badge-slide" key={index}>
              <div dangerouslySetInnerHTML={{ __html: badge['Badge Code'] }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grapplers;
