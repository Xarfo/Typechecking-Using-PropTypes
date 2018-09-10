import React from "react";
import ReactDOM from "react-dom";
import QuoteList from "./QuoteList";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      memoData: [
        {
          id: 1,
          title: "Hawaiian Shirt Friday",
          memo:
            "Oh, and remember: Next Friday…is Hawaiian shirt day. So, you know, if you want to, go ahead and wear a Hawaiian shirt and jeans."
        },
        {
          id: 2,
          title: "Sunday Weekend Catch-up",
          memo:
            "Ahh, I'm also going to need you to go ahead and come in on Sunday, too. We've got some new people coming in and we... need to play catch-up. Thanks!"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Mr. Lumbergh's Memos</h1>
        <QuoteList memos={this.state.memoData} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
