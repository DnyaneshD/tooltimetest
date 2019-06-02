import React from "react";

import "./choiceStyles.css";

interface IChoice {
  choice: string;
  isVoted: boolean;
  votes: string;
  url: string;
  handleVote: (c: IChoice) => void;
  handleCancel: (c: IChoice) => void;
}

export const Choice = (props: IChoice) => {
  return (
    <div className="chocies" key={props.url}>
      <div>{props.choice}</div>
      <div>{props.votes}</div>
      <div>Percentage</div>
      <div>
        <button
          disabled={props.isVoted}
          onClick={() => props.handleVote(props)}>
          Vote
        </button>
        <button
          disabled={!props.isVoted}
          onClick={() => props.handleCancel(props)}>
          Cancel
        </button>
      </div>
    </div>
  );
};
