import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Form";
import { getRandomGifs } from "./services";

const App = () => {
  const [category, setCategory] = useState("");
  const [gifs, setGifs] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
      const result = await getRandomGifs(category);
      setGifs(result);
    };
    fetchGifs();
  }, [category]);

  const handleCategory = (query: string) => {
    setCategory(query);
  };

  return (
    <div className="container">
      <Form onCategory={handleCategory} />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src={gifs} className="gif" alt="el pity" />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
