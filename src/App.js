import React, { Component } from "react";
import "./App.css";
import { withNamespaces } from "react-i18next";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Components
import Home from "./components/Home/index";
import MusicStyle from "./components/MusicStyle/index";
import MusicStyleDetails from "./components/MusicStyleDetails/index";

/** Here we predefined to create context */

export const Context = React.createContext();

const contextValue = {
  MUSIC_DETAILS: ["artists", "similarities", "anecdotes", "blues"],
  BLUES_DETAILS: ["artists", "anecdotes", "impact", "origine", "themes"]
};

/**
 *  App basic router
 */
const AppRouter = (translate: string => string) => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        render={props => (
          <Home paramsRouter={props} translateFunction={translate} />
        )}
      />
      <Route
        exact
        path="/:musicStyle"
        render={props => (
          <MusicStyle paramsRouter={props} translateFunction={translate} />
        )}
      />
      <Route
        exact
        path="/:musicStyle/:musicStyleDetail"
        render={props => (
          <MusicStyleDetails
            paramsRouter={props}
            translateFunction={translate}
          />
        )}
      />
    </div>
  </Router>
);

type Props = {
  t: string => string
};
type State = {};

class App extends Component<Props, State> {
  state = {};

  render() {
    const { t } = this.props;
    return (
      <Context.Provider value={contextValue}>
        <AppRouter translate={t} />
      </Context.Provider>
    );
  }
}

export default withNamespaces()(App);
