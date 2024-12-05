import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value); // Call the parent function to handle the search term
  };

  return (
    <Form className="mb-4">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={handleInputChange} // Updates the parent with each keystroke
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
