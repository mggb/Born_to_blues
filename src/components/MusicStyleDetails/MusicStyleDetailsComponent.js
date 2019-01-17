// @flow

import React, { Component } from "react";
import "./styles/MusicStyleDetailsComponent.css";

import ArtistsComponent from "./ArtistsComponent";
import AnnecdoteComponent from "./AnecdoteComponent";
import LinksComponent from "./LinksComponent";
import ImpactComponent from "./ImpactComponent";
import OriginComponent from "./OrigineComponent";
import ThemeComponent from "./ThemeComponent";

// import Header Component
import HeaderComponent from "../../utils/headerComponent";

type Props = {
  params: {
    musicStyle: string,
    musicStyleDetail: string
  },
  translateFunction: {
    translate: string => string
  }
};

type State = {};

export default class MusicStyleDetailsComponent extends Component<
  Props,
  State
> {
  state = {};

  render() {
    const { params } = this.props;

    return (
      <div>
        <HeaderComponent params={params} />
        {params.musicStyleDetail === "artists" && (
          <ArtistsComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        )}
        {params.musicStyleDetail === "anecdotes" && (
          <AnnecdoteComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        )}
        {params.musicStyleDetail === "links" && (
          <LinksComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        )}
        {params.musicStyle === "blues" &&
        params.musicStyleDetail === "impact" ? (
          <ImpactComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        ) : null}
        {params.musicStyle === "blues" &&
        params.musicStyleDetail === "origine" ? (
          <OriginComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        ) : null}
        {params.musicStyle === "blues" &&
        params.musicStyleDetail === "themes" ? (
          <ThemeComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
        ) : null}
      </div>
    );
  }
}
