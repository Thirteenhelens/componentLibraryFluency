// import css styling
import "./App.css";

// import react dom stuff to make routes :)
import { Routes, Route } from "react-router-dom";

// import needed components
import MuiPage from "../MuiPage/MuiPage.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import RebassPage from "../RebassPage/Rebass.jsx";
import FluentUiPage from "../FluentUiPage/FluentUiPage.jsx";
import AntDesignPage from "../AntdesignPage/AntdesignPage.jsx";
import ReactBootstrapPage from "../BooststrapPage/BooststrapPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rebass" element={<RebassPage />} />
      <Route path="/materialui" element={<MuiPage />} />
      <Route path="/antdesign" element={<AntDesignPage />} />
      <Route path="/fluentuipage" element={<FluentUiPage />} />
      <Route path="/reactbootstrap" element={<ReactBootstrapPage />} />
    </Routes>
  );
}
