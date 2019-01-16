// @flow
import React, { Component } from "react";
import SubLinksComponent from "./SubLinksComponent";
import SubArtistsComponent from "./SubArtistsComponent";

type Props = {
  params: {
    musicStyle: string,
    musicStyleDetail: string,
    musicStyleSubDetail: string
  },
  translateFunction: {
    translate: string => string
  }
};

type State = {};

const SUB_DETAILS = ["instruments", "electric-guitar"];

export default class MusicStyleSubDetailsComponent extends Component<
  Props,
  State
  > {
  state = {};

  filterNavSubDetails = (element: any) => {
    SUB_DETAILS.filter(item => item !== element);
  };

  render() {
    const { params } = this.props;
    return (
      <section>
        {params.musicStyleDetail === "artists" && (
          <SubArtistsComponent
            arrayElement={SUB_DETAILS}
            musicStyle={params.musicStyle}
            musicDetail={params.musicStyleDetail}
            musicStyleSubDetail={params.musicStyleSubDetail}
          />
        )}
        {params.musicStyleDetail === "links" && (
          <SubLinksComponent
            arrayElement={SUB_DETAILS}
            musicStyle={params.musicStyle}
            musicDetail={params.musicStyleDetail}
            musicStyleSubDetail={params.musicStyleSubDetail}
          />
        )}
      </section>
    );
  }
}
