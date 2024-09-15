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
  return (
    <div className="home-style">
      <Navbar />
      <GetStarted />
      <div className="signup-style-home-page">
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
