import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MusicStyleDetailsContainer from "./MusicStyleDetailsContainer";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const props = {
    paramsRouter: { match: { params: { musicStyleDetail: "artists" } } }
  };
  const translateFunction = jest.fn();
  shallow(
    <Router>
      <Route
        exact
        path="/:musicStyle/:musicStyleDetail"
        render={() => (
          <MusicStyleDetailsContainer
            paramsRouter={props}
            translateFunction={translateFunction}
          />
        )}
      />
    </Router>
  );
});
