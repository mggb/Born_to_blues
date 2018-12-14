// @flow

import React from "react";
import MusicStyleDetailsComponent from "./MusicStyleDetailsComponent";
import "./styles/MusicStyleDetailsContainer.css";

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
    <MusicStyleDetailsComponent
      translateFunction={translateFunction}
      params={params}
    />
  );
};

export default MusicStyleContainer;
