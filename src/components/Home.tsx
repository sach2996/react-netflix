import FAQ from "./FAQ";
import GetStarted from "./GetStarted";
import More from "./More";
import Navbar from "./Navbar";

export default function Home() {
  const homeStyle = {
    backgroundImage: "url(public/images/misc/home-bg.jpg)",
    height: "100vh",
  };
  return (
    <div className="home-style" style={homeStyle}>
      <Navbar />
      <GetStarted />
      <More />
      <FAQ />
    </div>
  );
}
