import React, { useState } from "react";

interface FormProps {
  onCategory: (text: string) => void;
}

const Form = ({ onCategory }: FormProps): JSX.Element => {
  const [query, setQuery] = useState("");

  const handleQuery = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onCategory(query);
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="search" className="col-1 col-form-label">
          Search:{" "}
        </label>
        <div className="col-4">
          <input
            type="text"
            id="search"
            className="search form-control"
            onChange={handleQuery}
            value={query}
          />
        </div>
        <button type="submit" className="btn btn-info btn-sm col-1">
          Go
        </button>
      </div>
    </form>
  );
};

export default Form;
