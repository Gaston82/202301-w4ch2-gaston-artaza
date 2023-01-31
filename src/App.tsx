import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import { getRandomGifs } from "./services";

const App = () => {
  const [category, setCategory] = useState("");
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const result = await getRandomGifs();
      setGifs(result);
    };
    fetchGifs();
  }, []);

  const handleCategory = (query: string) => {
    setCategory(query);
  };

  return (
    <div className="container">
      <Form onCategory={handleCategory} />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Mt1FIGttFtgk2JdDD-2xQAHaEK&pid=Api&P=0"
            className="gif"
            alt="el pity"
          />
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
