import { Route, Routes } from "react-router";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import ArtworkDetail from "./pages/Artwork";

function App() {
  return (
    <>
      <ScrollToTop />

      <header className="sticky top-0 z-100">
        <Navbar />
        <Banner
          eventName="What Remains"
          location="State Fair"
          date="Oct 29th"
        />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
