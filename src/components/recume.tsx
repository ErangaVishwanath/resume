import "./recume.css";

const recume = () => {
  return (
    <>
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">EDUCATION</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Faculty of Information Technology, University of Moratuwa
              </h4>

              <span>2020 — Expected-2024</span>

              <p className="timeline-text">
                Reading for BSc. (Hons) in Information Technology University of
                Moratuwa.
                <br />
                Second Class Lower Division
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                MR / Siddhartha College - Weligama
              </h4>

              <span>2004 — 2018</span>

              <p className="timeline-text">
                G.C.E. Advanced Level 2018 (Physical Science)
                <br />
                Combined Mathematics - A, Physics - B, Chemistry - B
                <br />
                G.C.E. Ordinary Level 2014 (7 A's, 1B and 1C)
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">WORK EXPERIENCE</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Associate Software Engineer 
              </h4>

              <span>Unicorn Solutions (Pvt) Ltd</span>

              <p className="timeline-text">
                <ul>
                  <li className="point">
                  Developing a UI automation project tailored to the company's
                needs. The project aims to perform smoke testing quickly and
                efficiently.
                  </li>
                </ul>
              </p>
              <span>
                Technologies : .Net Core, Azure Cloud Services, SpecFlow
              </span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Trainee Software Engineer
              </h4>

              <span>Unicorn Solutions (Pvt) Ltd</span>

              <p className="timeline-text">
                <ul>
                  <li className="point">
                    Involved in the “QUICK-IN” project as a full-stack developer.
                  </li>
                  <li className="point">
                    Develop “QUICK-IN” Employee Management System, a cloud-based
                  </li>
                  <li className="point">
                    solution deployed on Azure. Seamlessly manage employee
                    details, track attendance, and ensure operational
                    efficiency.
                  </li>
                </ul>
              </p>
              <span>
                Technologies : ReactTS, .Net Core, Azure Cloud Services,
                MongoDB,
              </span>
            </li>
          </ol>
        </section>
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">PROJECTS</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Automatic Infographics generation system using Natural Language
                contents related to Agriculture sector
              </h4>

              <span>Final Year Research Project (2024)</span>

              <p className="timeline-text">
                The automatic infographic generation system that uses the
                Natural Language content employs advanced Natural Language
                Processing (NLP) techniques to reduce complex textual
                information to concise, meaningful summaries. The system uses
                machine learning algorithms to intelligently select appropriate
                visualizations, ensuring accuracy and relevance in the
                representation of summarized content.
              </p>
              <span>
                Role : Specializing in summarizing Sinhala paragraphs for
                optimal infographic content.
              </span>
              <span>Technologies : Python, NLP</span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Musical Artist Booking and Event Ticket Reservations System
              </h4>

              <span>Personal Project (2024)</span>

              <p className="timeline-text">
                Event organizers can easily book talented artists for their
                upcoming events, while participants enjoy the convenience of
                purchasing event tickets hassle-free through our intuitive
                system. From artist selection to ticket reservations
              </p>
              <span>
                Role : Stripe payment gateway integration and ensuring handling
                of financial transactions and providing a secure payment
                experience for both event organizers and participants.
              </span>
              <span>
                Technologies : ReactJS, Springboot, MySQL, Stripe Payment
                Gateway
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Sport Equipment selling system
              </h4>

              <span>Personal Project (2023)</span>

              <p className="timeline-text">
                Aim of this project selling personal brand sport equipment to
                the European market.
              </p>
              {/* <span>
                Role : Stripe payment gateway integration and ensuring handling
                of financial transactions and providing a secure payment
                experience for both event organizers and participants.
              </span> */}
              <span>Technologies : React JS, Springboot, MySQL, PayPal</span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Travel Blog Site Frontend
              </h4>

              <span>Personal Project (2023)</span>

              <p className="timeline-text">
                This blog site designed for share and explore destinations. This
                platforms provide showcase personal travel experiences and
                adventures.
              </p>
              {/* <span>
                Role : Stripe payment gateway integration and ensuring handling
                of financial transactions and providing a secure payment
                experience for both event organizers and participants.
              </span> */}
              <span>Technologies : React TS</span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Online Selling & Buying System
              </h4>

              <span>Second Year Software Project</span>

              <p className="timeline-text">
                The aim of this project is to design a software system for
                buying and selling. Srilankan products can sell through this
                system for the international market.
              </p>
              <span>
                Role : Full-stack developer (Including Admin Panel, Payment
                gateway handling and Home page)
              </span>
              <span>
                Technologies : ReactJS, NodeJS, MongoDB, Express, CSS, Bootstrap
              </span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Web Application for Agrarian Service Center
              </h4>

              <span>Academic Team project (2021)</span>

              <p className="timeline-text">
                A web-based project that acts as the bridge between officers of
                agrarian center and farmers.
              </p>
              <span>
                Role : Designed the Admin Panel and implemented role-based
                access controls within the login system, strategically
                restricting specific features to customers.
              </span>
              <span>Technologies : HTML, CSS, JavaScript, Bootstrap, PHP</span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Automated Coconut Milk Generator Machine
              </h4>

              <span>First Year Hardware Project</span>

              <p className="timeline-text">
                This is a proposed solution for to reduce time wasting for
                coconut milk generate. To make an automated coconut milk
                generator to simplify the coconut milk generating process and
                save time for people who have got busy schedules.
              </p>
              <span>
                Role : Implemented servo and stepper motor code and designed the
                printed circuit board (PCB).
              </span>
              <span>Technologies : Atmel studio, Proteus simulator, C</span>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">ACHIEVEMENTS</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Thinkwave 3.0 - Organized by AIESEC, UoM - Semi-finalists
              </h4>

              <span>2022</span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Hack Moral 4.0 - Organized by INTECS, UoM - Participant
              </h4>

              <span>2022</span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                CODE RUSH Organized by INTECS, UoM - Participant
              </h4>

              <span>2020</span>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">ROLES & RESPONSIBILITIES</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Position Of Chairman</h4>

              <span>IEEE IAS Chapter - University of Moratuwa</span>
              <p className="timeline-text">2022 - 2023</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Director of Graphic Design
              </h4>

              <span>IEEE IAS Chapter - University of Moratuwa</span>
              <p className="timeline-text">2021 - 2022</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Video Editor</h4>

              <span>IEEE Student Branch - University of Moratuwa</span>
              <p className="timeline-text">2021 - 2022</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Co-Chair person of IAS Comrade Phase 4.0
              </h4>

              <span>IEEE IAS Chapter - University of Moratuwa</span>
              <p className="timeline-text">2022</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Conducting Maths seminars for O/L Children
              </h4>

              <span>Rotaract Club of University of Moratuwa</span>
              <p className="timeline-text">2021</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                CSS Developer in Treasure Hunt
              </h4>

              <span>Rotaract Club of University of Moratuwa</span>
              <p className="timeline-text">2020</p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">VOLUNTEERING EXPERIENCES</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Video Editing for IEEE NFB Championship - IEEE Student Branch
                UoM
              </h4>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Video Editing for IEEE Xtream 15.0 - IEEE Student Branch UoM
              </h4>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Video editing for IEEE Open Day 2021 - IEEE Student Branch UoM
              </h4>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Graphic Designer in MERCon 2021 - IEEE Student Branch UoM
              </h4>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Company coordinator at Are you ready 2020, official career fair
                of UoM
              </h4>
            </li>
            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                CSS Developer in Treasure Hunt 2020 - Rotaract Club of UoM
              </h4>
            </li> */}
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">Pro skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Photoshop</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Premiere Pro</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Blender</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">InDesign</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Illustrator</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">After Effects</h5>
                <data value="40">40%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default recume;
