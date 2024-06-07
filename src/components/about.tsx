import service from "./service";
import testimonials from "./testimonials";
import testimonialsModal from "./testimonialsModal";
import client from "./client";
import "./about.css";

const about = () => {
  return (
    <>
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            As an enthusiastic and self-motivated IT graduate, I am driven by a
            passion for learning and a strong ambition to achieve my goals.
            Having completed my internship, I am now seeking to leverage my
            skills and experience in the IT industry as a full-time software
            engineer. I am eager to explore new opportunities, advance my
            knowledge, and contribute to innovative projects, making a
            meaningful impact in the field.
          </p>
          <p>
            My mission is to develop full-stack websites that are not only
            functional and user-friendly but also visually appealing. I infuse
            each project with a personal touch, ensuring that the end product is
            both eye-catching and intuitive to use. My goal is to convey your
            message and brand identity in the most creative and effective
            manner. With experience in designing and developing websites for
            prominent brands, I am committed to delivering high-quality web
            solutions that stand out.
          </p>
        </section>
        {service()}
        {testimonials()}
        {testimonialsModal()}
        {client()}
      </article>
    </>
  );
};

export default about;
