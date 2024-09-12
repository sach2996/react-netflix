import "../index.css";
import "./Signin.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/"); // Replace '/signin' with the actual path to your SignIn component
  };
  const homeStyle = {
    backgroundImage: "url(public/images/misc/home-bg.jpg)",
    height: "100vh",
  };
  return (
    <div style={homeStyle}>
      <div className="navbar-container" onClick={handleSignInClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 1024 276.742"
        >
          <path
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
            fill="#d81f26"
          />
        </svg>
      </div>
      <div className="sigin-container">
        <form>
          <div style={{ width: "100%" }}>
            <h1>Sign In</h1>
          </div>
          <input
            className="input-box"
            placeholder="Email or mobile number"
            type="email"
          />
          <input className="input-box" placeholder="Password" type="password" />
          <button style={{ backgroundColor: "red" }}>Sign In</button>
          <p style={{ color: "gray" }}> OR</p>
          <button style={{ backgroundColor: "rgba(128, 128, 128, 0.4)" }}>
            Use a Sign-In Code
          </button>
          <div className="password-link">
            <a>Forgot password?</a>
          </div>
          <div className="checkbox-style">
            <input
              style={{ marginRight: "1rem" }}
              type="checkbox"
              id="remember-me"
              //   checked={rememberMe}
              //   onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div style={{ color: "gray", width: "100%", marginBottom: "1rem" }}>
            New to Netflix? <a style={{ color: "white" }}>Sign up now</a>{" "}
          </div>
          <div style={{ color: "gray" }}>
            <p style={{ fontSize: "13px" }}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a style={{ color: "#0071eb" }}>Learn more.</a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
