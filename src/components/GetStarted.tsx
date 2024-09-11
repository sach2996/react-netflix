import "../index.css";
export default function GetStarted() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p className="home-text-p">Starts at $5.99. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="email-form">
        <input placeholder="Email address" />
        <button className="get-started-button">Get Started &gt;</button>
      </div>
    </div>
  );
}
