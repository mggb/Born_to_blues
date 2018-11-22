import React from "react";
import Home from "./HomeComponent";

type Props = {
  translateFunction: {
    translate: string => string
  }
};

const HomeContainer = (props: Props) => {
  const { translateFunction } = props;
  return <Home translateFunction={translateFunction} />;
};

export default HomeContainer;
