import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { dateFormatter } from "../../helper/formatDateTime";
import "./questionStyle.css";

interface IQuestion extends RouteComponentProps<any> {
  questionText: string;
  publishedAt: string;
  lengthOfChoices: string;
}

export const Question = withRouter((props: IQuestion) => {
  return (
    <div>
      <div className="box">
        <span className="text">
          <b>{props.questionText}</b>
        </span>
        <span className="text">{dateFormatter(props.publishedAt)}</span>
        <span className="text">{props.lengthOfChoices}</span>
      </div>
    </div>
  );
});
