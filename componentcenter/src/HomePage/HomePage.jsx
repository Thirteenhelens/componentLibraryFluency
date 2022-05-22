import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="head">
        <h1>ThirteenHelens LLC</h1>
      </div>

      <div className="nav">
        <div className="mui">
          <Link to="/materialui">MUI</Link>
        </div>
        <div className="reactB">
          <Link to="/reactbootstrap">React Bootstrap</Link>
        </div>
        <div className="rebass">
          <Link to="/rebass">Rebass</Link>
        </div>
        <div className="antD">
          <Link to="/antdesign">Ant Design</Link>
        </div>
      </div>

      <div className="aboutSection">
        <h2>What is ThirteenHelens?</h2>
        <h3>text text text</h3>
        <h2>What is this site?</h2>
        <h3>text text text</h3>

        <div className="resume"></div>
      </div>
    </>
  );
}
