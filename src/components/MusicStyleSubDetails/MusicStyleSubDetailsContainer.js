// @flow

import React from "react";
import MusicStyleSubDetailsComponent from "./MusicStyleSubDetailsComponent";
import "./styles/MusicStyleSubDetailsContainer.css";

type Props = {
  paramsRouter: {
    match: {
      params: any
    }
  },
  translateFunction: {
    translate: string => string
  }
};

/**
 *  Music Details Container
 */

const MusicStyleContainer = (props: Props) => {
  const {
    paramsRouter: {
      match: { params }
    },
    translateFunction
  } = props;

  return (
    <MusicStyleSubDetailsComponent
      translateFunction={translateFunction}
      params={params}
    />
  );
};

export default MusicStyleContainer;
