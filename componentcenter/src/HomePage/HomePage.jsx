// importing css styling
import "./HomePage.css";

// import React & components
import React from "react";
import NavBar from "../NavBar/NavBar";
import AbtSection from "../AbtSection/AbtSection";

export default function HomePage() {
  return (
    <>
      <header>
        <div className="head">
          <h1>ThirteenHelens LLC</h1>
        </div>

        <div className="navbar">
          <NavBar />
        </div>
      </header>

      <div className="aboutSection">
        <AbtSection />
      </div>
    </>
  );
}
