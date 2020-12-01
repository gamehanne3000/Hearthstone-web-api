import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <h1>HEARTSTHONE</h1>
        <p>Check out these cool buttons !!</p>
        <div className="button-wrapper">
          <Link to="/cardBack">
            <button>card backs</button>
          </Link>
          <Link to="/cardSet">
            <button>set of cards</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
