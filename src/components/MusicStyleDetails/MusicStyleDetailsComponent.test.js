import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MusicStyleDetailsComponent from "./MusicStyleDetailsComponent";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  const props = {
    musicStyleDetail: "artists",
    musicStyle: "rock"
  };
  const translateFunction = jest.fn();
  shallow(
    <MusicStyleDetailsComponent
      params={props}
      translateFunction={translateFunction}
    />
  );
});
