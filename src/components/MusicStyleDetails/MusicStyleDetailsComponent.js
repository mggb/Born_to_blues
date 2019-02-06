// @flow

import React, { Component } from "react";
import "./styles/MusicStyleDetailsComponent.css";

import ArtistsComponent from "./components/ArtistsComponent";
import AnecdoteComponent from "./components/AnecdoteComponent";
import InfluenceComponent from "./components/InfluenceComponent";
import LinksComponent from "./components/LinksComponent";

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
      case "influences":
        return (
          <InfluenceComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
          />
        );
      case "links":
      case "origin":
        return (
          <LinksComponent
            musicStyle={musicStyle}
            musicStyleDetail={musicStyleDetail}
          />
        );
      default:
    }
  };

  render() {
    const {
      params: { musicStyle, musicStyleDetail },
      params
    } = this.props;

    const styleColor = '#a80000';

    const css = `
      #header a.headerLink:before{
          background: ${styleColor};
      }
      #header a.headerLink:after{
          background: ${styleColor};
      }
      #anecdote .text button {
          background: ${styleColor};
      }
      #anecdote .nav a{
          color: ${styleColor};
      }
      #anecdote .nav li:before{
          background: ${styleColor};
      }
      .navDetails a.active:before{
          background: ${styleColor};
      }
      #links a{
          color: ${styleColor};
      }
      #links a:before{
          background: ${styleColor};
      }
    `;

    return (
      <div>
        <style>{css}</style>
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
