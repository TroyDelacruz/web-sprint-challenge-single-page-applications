import React from "react";
import { useHistory, Link } from "react-router-dom";

function Home() {
  const history = useHistory();
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    history.push("/pizza");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Click the button to get started!</p>
      <Link to="/pizza">
        <button id="order-pizza" onClick={handleClick}>
          Order Pizza!
        </button>
      </Link>
    </div>
  );
}

export default Home;
