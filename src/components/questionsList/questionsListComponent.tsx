import React from "react";
import axios from "axios";
import { withRouter, RouteComponentProps } from "react-router";

import { Question } from "../question/questionComponent";
import "./questionsListStyles.css";

interface IQuestionListItem {
  choices: any;
  published_at: string;
  question: string;
  url: string;
}

interface IQuestionsState {
  questionsLamp: IQuestionListItem[];
}

class QuestionsList extends React.PureComponent<
  RouteComponentProps<any>,
  IQuestionsState
> {
  state = { questionsLamp: [] };

  public componentDidMount() {
    axios
      .get("https://polls.apiblueprint.org/questions")
      .then(response => {
        this.setState({ questionsLamp: response.data as IQuestionListItem[] });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  public render() {
    return (
      <div className="questionsList">
        <h1>Questions</h1>
        <div className="container">
          {this.state.questionsLamp.length > 0 &&
            this.state.questionsLamp.map((q: IQuestionListItem) => (
              <Question
                key={q.url}
                url={q.url}
                questionText={q.question}
                lengthOfChoices={q.choices.length}
                publishedAt={q.published_at}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionsList);
