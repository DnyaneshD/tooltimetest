import React from "react";
import "./app.css";
import { Questions } from "../../components/questions/questionsComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <Questions />
    </div>
  );
};

export default App;
