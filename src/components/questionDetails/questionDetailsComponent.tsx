import React from "react";
import axios from "axios";
import { withRouter, RouteComponentProps } from "react-router";

import "./questionDetailsStyles.css";
import { Choice } from "../choice/choiceComponent";

interface IChoice {
  choice: string;
  votes: string;
  url: string;
}

interface IQuestionDetails {
  choices: IChoice[];
  published_at: string;
  question: string;
  url: string;
}

interface IQuestionDetailsState {
  questionDetails: IQuestionDetails;
  votes: string[];
}

class QuestionDetails extends React.PureComponent<
  RouteComponentProps<any>,
  IQuestionDetailsState
> {
  state = { questionDetails: {} as IQuestionDetails, votes: [] as string[] };

  public componentDidMount() {
    axios
      .get(
        `https://polls.apiblueprint.org/questions/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ questionDetails: response.data as IQuestionDetails });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  public render() {
    const { questionDetails, votes } = this.state;
    return (
      <div className="questionDetails">
        <h1>Question Detail</h1>
        <h2>Question: {questionDetails.question} </h2>
        {questionDetails.choices &&
          questionDetails.choices.length > 0 &&
          questionDetails.choices.map((c: IChoice) => (
            <Choice
              choice={c.choice}
              handleCancel={this.handleCancel}
              handleVote={this.handleVote}
              key={c.url}
              url={c.url}
              votes={c.votes}
              isVoted={this.isVoted(c) > -1}
            />
          ))}
        <button
          className="saveButton"
          disabled={!(votes && votes.length > 0)}
          onClick={this.handleSaveVotes}>
          Save Votes
        </button>
      </div>
    );
  }

  isVoted = (c: IChoice) =>
    this.state.votes.findIndex((v: string) => v === c.url);

  handleVote = (c: IChoice): void => {
    this.setState({
      ...this.state,
      votes: this.state.votes.concat(c.url)
    });
  };

  handleCancel = (c: IChoice): void => {
    const { votes } = this.state;
    const urlIndex = votes.findIndex((v: string) => v === c.url);

    if (urlIndex > -1) {
      this.setState({
        ...this.state,
        votes: this.state.votes.filter(v => v !== c.url)
      });
    }
  };

  handleSaveVotes = (): void => {
    const { votes } = this.state;

    const postRequests = votes.map((v: string) => {
      return axios.post(`https://polls.apiblueprint.org${v}`);
    });

    axios
      .all(postRequests)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default withRouter(QuestionDetails);
