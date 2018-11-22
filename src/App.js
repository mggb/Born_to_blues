// @flow

import React, { Component } from "react";
import "./App.css";
import { withNamespaces } from "react-i18next";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Home from "./components/home/index";
import MusicStyle from "./components/musicStyle/index";
import MusicStyleDetails from "./components/musicStyleDetails/index";

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
        path="/about/:musicStyle"
        render={props => (
          <MusicStyle paramsRouter={props} translateFunction={translate} />
        )}
      />
      <Route
        exact
        path="/about/:musicStyle/:musicStyleDetail"
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
    return <AppRouter translate={t} />;
  }
}

export default withNamespaces()(App);
