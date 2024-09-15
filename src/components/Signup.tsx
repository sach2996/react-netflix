import { useNavigate } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="signup-container">
      <div className="signup-text">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="email-form">
        <input placeholder="Email address" />
        <button className="get-started-button" onClick={handleSignUpClick}>
          Get Started &gt;
        </button>
      </div>
    </div>
  );
}
