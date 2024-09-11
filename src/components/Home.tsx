import GetStarted from "./GetStarted";

export default function Home() {
  const homeStyle = {
    backgroundImage: "url(public/images/misc/home-bg.jpg)",
    display: "flex",
    height: "100vh",
  };
  return (
    <div style={homeStyle}>
      <GetStarted />
    </div>
  );
}
