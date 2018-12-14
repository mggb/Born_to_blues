// @flow

import React from "react";
import Home from "./HomeComponent";
import "./styles/HomeContainer.css";

type Props = {
  translateFunction: {
    translate: string => string
  }
};

/**
 *  Home Container
 */

const HomeContainer = (props: Props) => {
  const { translateFunction } = props;
  return <Home translateFunction={translateFunction} />;
};

export default HomeContainer;
