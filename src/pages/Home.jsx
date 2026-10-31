import AboutCTA from "../components/home/AboutCTA";
import CuratedCollection from "../components/home/CurratedCollection";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <CuratedCollection />
      <AboutCTA />
    </>
  );
}

export default Home;
