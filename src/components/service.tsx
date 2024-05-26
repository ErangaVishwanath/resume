import './service.css';

const service = () => {
  return (
    <>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="" alt="design icon" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-content-box">Web Scrapping</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-photo.svg"
                alt="camera icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database Management</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default service;
