import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavigationBar, NavigationDetails } from "../NavigationBar";

const MUSIC_ARRAY = ["rock", "jazz"];

const MUSIC_STYLE = "rock";

configure({ adapter: new Adapter() });

it("Renders NavigationBar without crashing", () => {
  shallow(<NavigationBar />);
  shallow(
    <NavigationDetails arrayElement={MUSIC_ARRAY} musicStyle={MUSIC_STYLE} />
  );
});
