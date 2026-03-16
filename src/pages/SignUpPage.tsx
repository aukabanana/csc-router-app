import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    console.log("Doing some logic first...");
    navigate("/");
  };

  return (
    <div>
      <h2>Sign Up Page</h2>
      <p>This page has no navigation bar.</p>
      <Link to="/">← Go back to Home</Link>
      <br />
      <button onClick={handleGoHome}>Go Home (programmatic)</button>
    </div>
  );
}

export default SignUpPage;