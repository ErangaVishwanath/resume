import './recume.css';

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

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Faculty of Information Technology, University of Moratuwa
              </h4>

              <span>2021 — Expected-2025</span>

              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                H / Rajapaksa Central College - Weeraketiya
              </h4>

              <span>2010 — 2018</span>

              <p className="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                ossimus, omnis voluptas assumenda est omnis..
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Intern Software Engineer @ HIT</h4>

              <span>6 months intern</span>

              <p className="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et qvuas molestias
                exceptur.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web designer</h4>

              <span>2022 — present</span>

              <p className="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
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
                <h5 className="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}

export default recume