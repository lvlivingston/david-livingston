import React from 'react';
import logoImage from '../images/placeholder-logo.png';
import bannerImage from '../images/gadsden.jpeg';
import headshotImage from '../images/headshot.jpeg';
import './HomePage.css';

export default function HomePage({ setUser }) {
  

  return (
    <main>
      <div className="nav-bar">
        <img
            src={logoImage}
            alt="Logo"
            className="nav-logo"
        />
        <div className="nav-text">
            <ul>
                <li>(256) 546-9300</li>
                <li>davidlivingston@comcast.net</li>
            </ul>
        </div>
      </div>
      <div className="image-container">
        <div className='headline'>
            Results Matter
        </div>
        {/* <hr className="separator" /> */}
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
        <div className='question'>
            Did you know?
        </div>
        <div className="question-text">
            <div>
                Without a will, all your assets will go into probate for at least 6 months?
            </div>
            <div>
                Avoid expensive legal fees, tax liability, and mental turmoil for your children. Prepare 3 items:
            </div>
            <ul>
                <li>Will</li>
                <li>Power of Attorney (POA)</li>
                <li>Medical POA</li>
                <li>Advanced Health Directive </li>
            </ul>
        </div>
      </div>
      <div className="body-landlord">
        <div className="question-map-container">
            <div className='question-white'>
                Are you a landlord?
            </div>
            <div className="question-text-white">
                David works with property owners in Etowah and surrounding counties to ensure a great relationship with tenants. From background checks to eviction work, he takes the hassle out of rentals
            </div>
        </div>
        <div className="map-container">
            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13228.882092693264!2d-86.012381!3d34.01255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888a3c1d614b4d47%3A0xebcad2a5793b6aaf!2sDavid%20Livingston%2C%20Attorney%20at%20Law!5e0!3m2!1sen!2sus!4v1706905078770!5m2!1sen!2sus"
                    title="Google Map Location"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
      </div>
      <div className="footer">
        <h2 className="footertext-address">247 South 8th Street&nbsp;&nbsp;&nbsp;Gadsden, AL 35901</h2>
        <h2 className="footertext-address">P.O. Box 1621&nbsp;&nbsp;&nbsp;Gadsden, AL 35902</h2>
        <h2 className="footertext-white">Office: (256) 546-9300</h2>
        <h2 className="footertext-white">Fax: (256) 546-9304</h2>
        <h2 className="footertext-white">davidlivingston@comcast.net</h2>
        <p className="footertext-legal">Copyright © 2024 David Livingston - All Rights Reserved</p>
      </div>
    </main>
  );
}
