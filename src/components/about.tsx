import service from "./service";
// import testimonials from "./testimonials";
// import testimonialsModal from "./testimonialsModal";
// import client from "./client";
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
            I am a dedicated, friendly, and hardworking individual who is always
            eager to be challenged to grow in my knowledge and skills, seeking a
            Software Engineering position in which I can utilize my abilities to
            their fullest potential, positively contribute to my personal
            growth, and make a meaningful impact on the organization.
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
        {/* {testimonials()} */}
        {/* {testimonialsModal()}
        {client()} */}
      </article>
    </>
  );
};

export default about;
