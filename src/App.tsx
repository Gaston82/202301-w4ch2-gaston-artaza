import React from "react";
import Form from "./components/Form/Form";

const App = () => {
  const handleCategory = (text: string) => {
    return text;
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
