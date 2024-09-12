import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import More from "./More";
import Navbar from "./Navbar";
import "../index.css";
import Signup from "./Signup";
import LearnMore from "./LearnMore";
import TrendingNow from "./TrendingNow";
import Footer from "./Footer";

export default function Home() {
  const homeStyle = {
    backgroundImage: "url(public/images/misc/home-bg.jpg)",
    height: "100vh",
  };
  return (
    <div className="home-style" style={homeStyle}>
      <Navbar />
      <GetStarted />
      <div style={{ paddingBottom: "50vh" }}>
        <Signup />
      </div>

      <LearnMore />
      <TrendingNow />
      <More />
      <FAQ />
      <Signup />
      <Footer />
    </div>
  );
}
