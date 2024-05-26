import React, { useState } from "react";
import "./sideBar.css";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <aside className={`sidebar ${isExpanded ? "expanded" : ""}`} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="/assets/myDp.jpg"
              alt="Avatar of Eranga Vishwanath"
              width={80}
              className="avatar"
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Eranga Vishwanath">
              Eranga Vishwanath
            </h1>
            <p className="title">Fullstack Developer</p>
          </div>
          <button
            className="info_more-btn"
            data-sidebar-btn
            aria-expanded={isExpanded}
            onClick={handleToggle}
          >
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:erangavishwanath@gmail.com"
                  className="contact-link"
                >
                  erangavishwanath@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+94789484840" className="contact-link">
                  +94 (78) 948-4840
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1999-08-24">August 24, 1999</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Beliatta, Southern province, Sri Lanka</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-medium"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
