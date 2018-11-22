// import React from "react";
import { configure /* shallow */ } from "enzyme";
// import MusicStyleContainer from "./index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Renders MusicStyleContainer without crashing", () => {
  // const translateFunction = jest.fn();
  // const paramsRouter = {
  //   paramsRouter: {
  //     match: {
  //       params: { musicStyle: "rock" }
  //     }
  //   }
  // };
  // shallow(
  //   <MusicStyleContainer
  //     translateFunction={translateFunction}
  //     params={paramsRouter.paramsRouter.match.params.musicStyle}
  //   />
  // );
});
