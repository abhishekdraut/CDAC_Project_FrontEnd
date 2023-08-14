import NavBar from "../layouts/navBar";
import Images from "../assets/img-ref/imges";
import "../assets/styles/Login/login.css";

function LoginPage(params) {
  const navObject = [
    { url: "#", name: "Sign Up" },
    { url: "#", name: "Profile" },
    { url: "#", name: "Sign In" },
  ];
  function LoginHero() {
    return (
      <>
        <div className="hero">
          <div className="hero-outer login-hihlighted">
            <div className="login-form">
              <form>
                Username:
                <input type="text" name="username" />
                Password:
                <input type="password" name="username" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar navObj={navObject} />
      <LoginHero />
    </>
  );
}

export default LoginPage;
