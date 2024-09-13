import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./SignupForm.css";

function SignupForm() {
  const [email, setEmail] = useState("Enter your email");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    window.alert("Functionality is under development");
  };

  return (
    <div>
      <Navbar />
      <div className="signup-form">
        <div className="signup-section">
          <p>STEP 1 OF 3</p>
          <h2>Welcome back!</h2>
          <h2>Joining Netflix is easy.</h2>
          <p>Enter your password and you'll be watching in no time.</p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <a href="#">Forgot your password?</a>
          </p>

          <button type="submit" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "white", color: "black" }}> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default SignupForm;
