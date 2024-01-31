import React from 'react';
import bannerImage from '../images/gadsden.jpeg';
import headshotImage from '../images/headshot.jpeg';
import './HomePage.css';

export default function HomePage({ setUser }) {
  

  return (
    <main>
      <div className="navigation">
        This is the placeholder for the top navigation
      </div>
      <div className="image-container">
        <div className='headline'>
            Results Matter
        </div>
        <hr className="separator" />
        <div className="headline-block">
            <ul>
                <li>Divorce, Custody & Adoptions</li>
                <li>Landlord Evictions</li>
                <li>Wills & Estate Planning</li>
                <li>Probate Matters</li>
                <li>Misdemeanor Criminal Defense</li>
            </ul>
        </div>
        <img
          src={bannerImage}
          alt="Gadsden Panorama"
          className="banner"
        />
      </div>
      <div className="body-bio">
        <div>
            <img
                src={headshotImage}
                alt="Gadsden Panorama"
                className="headshot"
                />
            </div>
        <div className="bio-paragraph">
            <p>
                David has over 35 years of experience practicing law and caring for
                the public needs of Northeast Alabama. Focused primarily on family
                and property matters, he knows better than anyone how to get the
                job done. He received his J.D. from the University of Alabama
                School of Law in 1985 and graduated from Birmingham-Southern
                College in 1982.
            </p>
        </div>
      </div>
      <div className="body-will">
        This is the placeholder for the black block with will & estate info
      </div>
      <div className="body-landlord">
        This is the placeholder for the white block with landlord info
      </div>
      <div className="footer">
        <h2 className="footertext-white"> Office: (256) 546-9300</h2>
        <h2 className="footertext-white"> Fax: (256) 546-9304</h2>
        <h2 className="footertext-white">davidlivingston@comcast.net</h2>
        <p className="footertext-legal">Copyright © 2024 David Livingston - All Rights Reserved</p>
      </div>
    </main>
  );
}
