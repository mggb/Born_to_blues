import React from "react";
import MusicStyle from "./MusicStyleComponent";
import "./styles/MusicStyleContainer.css";

type Props = {
  paramsRouter: {
    match: {
      params: {
        musicStyle: string
      }
    }
  },
  translateFunction: string => string
};

/**
 *  Music Style Container
 */

const MusicStyleContainer = (props: Props) => {
  const {
    paramsRouter: {
      match: {
        params: { musicStyle }
      }
    },
    translateFunction
  } = props;
  return (
    <MusicStyle translateFunction={translateFunction} params={musicStyle} />
  );
};

export default MusicStyleContainer;
