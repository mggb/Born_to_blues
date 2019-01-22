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

type State = {
  musicStyleState: any
};

export default class MusicStyleDetailsComponent extends Component<
  Props,
  State
> {
  state = {
    musicStyleState: null
  };

  fetchData = (musicStyle, musicStyleDetail) => {
    fetch(`http://127.0.0.1:3333/api/${musicStyleDetail}/${musicStyle}`)
      .then(res => res.json())
      .then(musicStyleState => {
        this.setState({ musicStyleState });
      });
  };

  componentWillMount = () => {
    const {
      params: { musicStyle, musicStyleDetail }
    } = this.props;
    this.fetchData(musicStyle, musicStyleDetail);
  };

  componentWillReceiveProps = nextProps => {
    this.fetchData(
      nextProps.params.musicStyle,
      nextProps.params.musicStyleDetail
    );
  };

  renderContent = () => {
    const {
      params: { musicStyle, musicStyleDetail }
    } = this.props;
    const { musicStyleState } = this.state;
    console.log("update", musicStyleState);
    switch (musicStyleDetail) {
      case "artists":
        return (
          <ArtistsComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
            musicStyleState={musicStyleState}
          />
        );
      case "anecdotes":
        return (
          <AnecdoteComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
            musicStyleState={musicStyleState}
          />
        );
      case "links":
        return (
          <LinksComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
            musicStyleState={musicStyleState}
          />
        );
      case "blues":
        switch (musicStyleDetail) {
          case "impact":
            return (
              <ImpactComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
                musicStyleState={musicStyleState}
              />
            );
          case "origine":
            return (
              <OriginComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
                musicStyleState={musicStyleState}
              />
            );
          case "theme":
            return (
              <ThemeComponent
                musicStyle={musicStyle}
                musicStyleDetail={musicStyleDetail}
                musicStyleState={musicStyleState}
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

    const { musicStyleState } = this.state;

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
                {musicStyleState && this.renderContent()}
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
