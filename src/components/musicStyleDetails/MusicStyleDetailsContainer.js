import React from "react";
import MusicStyleDetails from "./MusicStyleDetailsComponent";

type Props = {
  paramsRouter: {
    match: {
      params: string
    }
  },
  translateFunction: string => string
};

const MusicStyleContainer = (props: Props) => {
  const {
    paramsRouter: {
      match: { params }
    },
    translateFunction
  } = props;
  return (
    <MusicStyleDetails translateFunction={translateFunction} params={params} />
  );
};

export default MusicStyleContainer;
