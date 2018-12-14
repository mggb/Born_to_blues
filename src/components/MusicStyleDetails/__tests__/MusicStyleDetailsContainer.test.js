import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MusicStyleDetailsContainer from "../MusicStyleDetailsContainer";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const props = {
    match: { params: { musicStyleDetail: "artists" } }
  };
  const translateFunction = jest.fn();
  shallow(
    <MusicStyleDetailsContainer
      paramsRouter={props}
      translateFunction={translateFunction}
    />
  );
});
