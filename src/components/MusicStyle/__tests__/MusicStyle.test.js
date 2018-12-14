import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MusicStyleContainer from "../MusicStyleContainer";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const translateFunction = jest.fn();
  const paramsRouter = {
    paramsRouter: {
      match: {
        params: { musicStyle: "jazz" }
      }
    }
  };
  shallow(
    <Router>
      <Route
        exact
        path="/:musicStyle"
        render={() => (
          <MusicStyleContainer
            paramsRouter={paramsRouter}
            translateFunction={translateFunction}
          />
        )}
      />
    </Router>
  );
});
