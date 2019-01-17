// @flow

import React, { Component } from "react";
import "./styles/MusicStyleDetailsComponent.css";

import ArtistsComponent from "./components/ArtistsComponent";
import AnecdoteComponent from "./components/AnecdoteComponent";
import LinksComponent from "./components/LinksComponent";
import ImpactComponent from "./components/ImpactComponent";
import OriginComponent from "./components/OrigineComponent";
import ThemeComponent from "./components/ThemeComponent";

import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationDetails } from "../NavigationBar/index";
import { Context } from "../../App";

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

  renderContent = () => {
    const {
      params: { musicStyle, musicStyleDetail }
    } = this.props;
    switch (musicStyleDetail) {
      case "artists":
        return (
          <ArtistsComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
          />
        );
      case "anecdotes":
        return (
          <AnecdoteComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
          />
        );
      case "links":
        return (
          <LinksComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
          />
        );
      case "blues":
        switch (musicStyleDetail) {
          case "impact":
            return (
              <ImpactComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
              />
            );
          case "origine":
            return (
              <OriginComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
              />
            );
          case "theme":
            return (
              <ThemeComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
              />
            );
          default:
        }
        break;
      default:
    }
  };

  render() {
    const {
      params: { musicStyle, musicStyleDetail },
      params
    } = this.props;

    return (
      <div>
        <HeaderComponent params={params} />
        <Context.Consumer>
          {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
            <div id="wrap">
              <div className="flex">
                <h1>
                  <span>{pointFreeUpperCase(musicStyleDetail)}</span>
                </h1>
                {this.renderContent()}
              </div>
              <ul className="navDetails">
                {musicStyle === "blues" ? (
                  <NavigationDetails
                    arrayElement={BLUES_DETAILS}
                    musicStyle={musicStyle}
                    currentDetail={musicStyleDetail}
                  />
                ) : (
                  <NavigationDetails
                    arrayElement={MUSIC_DETAILS}
                    musicStyle={musicStyle}
                    currentDetail={musicStyleDetail}
                  />
                )}
              </ul>
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
