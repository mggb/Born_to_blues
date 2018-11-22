// import React from "react";
import { configure /* render */ } from "enzyme";
// import MusicStyleContainer from "./index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  // const paramsRouter = {
  //   props: {
  //     paramsRouter: { match: { params: { musicStyleDetail: "artists" } } }
  //   }
  // };
  // const translateFunction = jest.fn();
  // render(
  //   <MusicStyleContainer
  //     translateFunction={translateFunction}
  //     match="artists"
  //   />
  // );
});
