import "./signup.css";
export default function Signup() {
  return (
    <div className="signup-container">
      <div className="home-text">
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
