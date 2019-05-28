import React from "react";
import axios from "axios";

interface IQuestionDetails {
  choices: any;
  published_at: string;
  question: string;
  url: string;
}

interface IQuestionDetailsState {
  questionDetails: IQuestionDetails;
}

export class QuestionDetails extends React.PureComponent<
  {},
  IQuestionDetailsState
> {
  state = { questionDetails: {} as IQuestionDetails };

  public componentDidMount() {
    axios
      .get("https://polls.apiblueprint.org/questions")
      .then(response => {
        this.setState({ questionDetails: response.data as IQuestionDetails });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  public render() {
    return (
      <div>
        <h1>Question Detail</h1>
        <h2>Question </h2>
        <div className="chocies">
          <div>Choice</div>
          <div>Votes</div>
          <div>Percentage</div>
          <div>
            <button>Vote</button>
          </div>
        </div>
      </div>
    );
  }
}
