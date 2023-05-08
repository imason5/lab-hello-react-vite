import "./ImageSection.css";
import image1 from "../../assets/declarative.png";
import image2 from "../../assets/components.png";
import image3 from "../../assets/single-way.png";
import image4 from "../../assets/jsx.png";

const ImageSection = () => (
  <section className="image-section">
    <div className="image-section__grid">
      <div className="image-section__column">
        <img src={image1} alt="Image 1" />
        <h3>Declarative</h3>
        <p>
          React makes it <br /> painless to create <br /> interactive UIs.
        </p>
      </div>
      <div className="image-section__column">
        <img src={image2} alt="Image 2" />
        <h3>Components</h3>
        <p>
          Build encapsulated <br /> components that <br /> manage their state
        </p>
      </div>
      <div className="image-section__column">
        <img src={image3} alt="Image 3" />
        <h3>Single-Way</h3>
        <p>
          A set of immutable
          <br /> values are passed to <br /> the components.
        </p>
      </div>
      <div className="image-section__column">
        <img src={image4} alt="Image 4" />
        <h3>JSX</h3>
        <p>
          Statically-typed,
          <br /> designed to run on
          <br /> modern browsers.
        </p>
      </div>
    </div>
  </section>
);

export default ImageSection;
