import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { dateFormatter } from "../../helper/formatDateTime";
import "./questionStyle.css";

interface IQuestion extends RouteComponentProps<any> {
  url: string;
  questionText: string;
  publishedAt: string;
  lengthOfChoices: string;
}

export const Question = withRouter((props: IQuestion) => {
  const handleClick = () => {
    props.history.push(`${props.url}`);
  };

  return (
    <div>
      <div className="box" onClick={handleClick}>
        <span className="text">
          <b>{props.questionText}</b>
        </span>
        <span className="text">{dateFormatter(props.publishedAt)}</span>
        <span className="text">{props.lengthOfChoices}</span>
      </div>
    </div>
  );
});
