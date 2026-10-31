// import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import CuratedCollection from "./components/CurratedCollection";
import AboutCTA from "./components/AboutCTA";

function App() {
  return (
    <>
      <header className="sticky top-0 z-100">
        <Navbar />
        <Banner
          eventName="What Remains"
          location="State Fair"
          date="Oct 29th"
        />
      </header>
      <Hero />
      <Featured />
      <CuratedCollection />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default App;
