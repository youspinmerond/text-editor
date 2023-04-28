import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <header>
      <nav>
        <div className="start">
          <Link to="/">Home</Link>
          <Link to="/editor">Editor</Link>
        </div>
        <div className="end">
          Editor
        </div>
      </nav>
    </header>
  );
}