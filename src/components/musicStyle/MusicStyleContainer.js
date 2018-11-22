import React from "react";
import MusicStyle from "./MusicStyleComponent";

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
