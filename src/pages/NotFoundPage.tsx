import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {

  return (
    <div>
      <h2>404 — Page Not Found</h2>
      <p>
        <code>{useLocation().pathname}</code> does not exist.
      </p>u.pathna
      <Link to="/">← Go back to Home</Link>
    </div>
  );
}