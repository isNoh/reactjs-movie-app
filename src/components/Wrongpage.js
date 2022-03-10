import { Link } from "react-router-dom";
import "../css/Wrongpage.css";

function Wrongpage() {
  return (
    <div className="wp-main">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>Page Not Found!</h1>
        <h1>Click to Home</h1>
      </Link>
    </div>
  );
}

export default Wrongpage;
