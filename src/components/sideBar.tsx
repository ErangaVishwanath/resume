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
              src="../../public/assets//CV_Squre.png"
              alt="Avatar of Chinthaka"
              width={80}
              className="avatar"
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Kavindu Chinthaka">
              Kavindu Chinthaka
            </h1>
            <p className="title">Software Engineer</p>
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
                  href="mailto:chinthakawmk@gmail.com"
                  className="contact-link"
                >
                  chinthakawmk@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+94767783752" className="contact-link">
                  +94 (76) 778-3752
                </a>
              </div>
            </li>
            {/* <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1999-08-24">August 24, 1999</time>
              </div>
            </li> */}
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>
                  No 5, Meegahawaththa, Wattakgoda, Weligama, Sri Lanka
                </address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a
                href="http://www.linkedin.com/in/kavindu-chinthaka-in"
                className="social-link"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://github.com/chinthaka-Git"
                className="social-link"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.behance.net/kavinduchinthaka"
                className="social-link"
              >
                <ion-icon name="logo-behance"></ion-icon>
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
