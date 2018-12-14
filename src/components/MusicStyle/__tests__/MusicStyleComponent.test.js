import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MusicStyleComponent from "../MusicStyleComponent";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const musicStyle = "rock";
  const translateFunction = jest.fn();
  shallow(
    <MusicStyleComponent
      params={musicStyle}
      translateFunction={translateFunction}
    />
  );
});
