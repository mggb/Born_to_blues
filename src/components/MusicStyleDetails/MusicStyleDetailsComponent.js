// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/MusicStyleDetailsComponent.css";
import logo from '../../assets/img/logo.png';

import ArtistsComponent from "./ArtistsComponent";
import AnnecdoteComponent from "./AnecdoteComponent";
import LinksComponent from './LinksComponent';
import ImpactComponent from './ImpactComponent';
import OriginComponent from './OrigineComponent';
import ThemeComponent from './ThemeComponent';

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
        <section id="header">
          <img src={logo} alt="website logo"/>
          <Link to={`/${params.musicStyle}`}>
            {params.musicStyle}
          </Link>
        </section>
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
        {params.musicStyle === "blues" && params.musicStyleDetail === "impact" ?
          <ImpactComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
          : null}
        {params.musicStyle === "blues" && params.musicStyleDetail === "origine" ?
          <OriginComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
          : null}
        {params.musicStyle === "blues" && params.musicStyleDetail === "themes" ?
          <ThemeComponent
            musicStyle={params.musicStyle}
            musicStyleDetail={params.musicStyleDetail}
          />
          : null}
      </div>

    );
  }
}
