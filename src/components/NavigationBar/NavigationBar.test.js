import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationBar from "./NavigationBar";

configure({ adapter: new Adapter() });

it("Renders NavigationBar without crashing", () => {
  shallow(<NavigationBar />);
});
