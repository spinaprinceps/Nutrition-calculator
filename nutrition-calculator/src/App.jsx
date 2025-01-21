import React from "react";
import Form from "./Form";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
    // Perform calculations here or pass data to another component
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
