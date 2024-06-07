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
            A responsible, self-motivated, skillful, dedicated, undergraduate
            with team spirit and leadership qualities who is willing to accept
            challenges, seeking an opportunity as a software engineer to apply
            and explore the existing and forthcoming technologies in the field
            of Information Technology.
          </p>
          {/* <p>
            My mission is to develop full-stack websites that are not only
            functional and user-friendly but also visually appealing. I infuse
            each project with a personal touch, ensuring that the end product is
            both eye-catching and intuitive to use. My goal is to convey your
            message and brand identity in the most creative and effective
            manner. With experience in designing and developing websites for
            prominent brands, I am committed to delivering high-quality web
            solutions that stand out.
          </p> */}
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
