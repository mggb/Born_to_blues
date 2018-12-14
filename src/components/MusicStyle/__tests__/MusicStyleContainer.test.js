import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MusicStyleContainer from "../MusicStyleContainer";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const props = {
    match: { params: { musicStyle: "rock" } }
  };
  const translateFunction = jest.fn();
  shallow(
    <MusicStyleContainer
      paramsRouter={props}
      translateFunction={translateFunction}
    />
  );
});
