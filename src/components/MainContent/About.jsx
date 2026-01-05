import dark from "../../assets/images/image-about-dark.jpg";
import light from "../../assets/images/image-about-light.jpg";

const AboutImgDark = () => <img src={dark} alt="image about dark" />;

const AboutImgLight = () => <img src={light} alt="image about dark" />;

const Description = () => (
  <div className="home__about-description c-card-description">
    <h2 className="home__about-title">About our furniture</h2>
    <p className="home__about-paragraph c-card-paragraph">
      Our multifunctional collection blends design and function to suit your
      individual taste. Make each room unique, or pick a cohesive theme that
      best express your interests and what inspires you. Find the furniture
      pieces you need, from traditional to contemporary styles or anything in
      between. Product specialists are available to help you create your dream
      space.
    </p>
  </div>
);

function About() {
  return (
    <section className="home__about">
      <AboutImgDark />
      <Description />
      <AboutImgLight />
    </section>
  );
}

export default About;
