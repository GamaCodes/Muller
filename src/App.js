import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Filosofia } from "./components/filosofia";
import { Carta } from "./components/carta";
import { Soluciones } from "./components/soluciones";
import { Sistemas } from "./components/sistemas";
import { Otros } from "./components/otros";
import { Flotilla } from "./components/flotilla";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Carta data={landingPageData.Carta} />
      <Filosofia data={landingPageData.Filosofia} />
      <Soluciones data={landingPageData.Soluciones} />
      <Sistemas />
      <Otros data={landingPageData.Otros} />
      <Flotilla data={landingPageData.Flotilla} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
