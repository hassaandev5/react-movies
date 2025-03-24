import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ movieName }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${movieName} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div
      className="card"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <h2>
        {movieName} - {count || null}
      </h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Welcome</h2>
      <div>
        <Card movieName="Iron Man" />
        <Card movieName="Spider Man" />
      </div>
    </>
  );
};

export default App;
