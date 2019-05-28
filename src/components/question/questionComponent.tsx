import React from "react";

import "./questionStyle.css";

interface IQuestion {
  questionText: string;
  publishedAt: string;
  lengthOfChoices: string;
}

export const Question = (props: IQuestion) => {
  return (
    <div>
      <div className="box">
        <span className="text">{props.questionText}</span>
        <span className="text">{props.publishedAt}</span>
        <span className="text">{props.lengthOfChoices}</span>
      </div>
    </div>
  );
};
