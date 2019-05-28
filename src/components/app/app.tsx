import React from "react";
import "./app.css";
import QuestionsList from "../../components/questionsList/questionsListComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <QuestionsList />
    </div>
  );
};

export default App;
