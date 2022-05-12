import React, { useRef } from "react";
import "./App.css";
import { VerticalNavigation } from "./components/navigation/navigation";
import AboutSection from "./pages/About/about";
import CastSection from "./pages/Casts/casts";
import HomePage from "./pages/Home/home";
import SeasonSection from "./pages/Seasons/seasons";

const App = () => {
  const homeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const aboutRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const castRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const seasonRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className="App">
      <VerticalNavigation refs={[homeRef, aboutRef, castRef, seasonRef]} />
      <HomePage ref={homeRef} />
      <AboutSection ref={aboutRef} />
      <CastSection ref={castRef} />
      <SeasonSection ref={seasonRef} />
    </div>
  );
};

export default App;
