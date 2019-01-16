// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
  NavigationBar,
  NavigationDetails,
  NavigationSubDetails
} from "../NavigationBar/index";
import "./styles/MusicStyleDetailsComponent.css";
import { Context } from "../../App";

import ArtistsComponent from "./ArtistsComponent";
import AnnecdoteComponent from "./AnecdoteComponent";
import LinksComponent from './LinksComponent';

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
      <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
          <div>
            <li>
              <Link to={`/${params.musicStyle}`}>
                Back to {params.musicStyle}
              </Link>
            </li>
            <NavigationBar />
            {params.musicStyleDetail === "artists" && (
              <ArtistsComponent 
              musicStyle = {params.musicStyle}
              musicStyleDetail = {params.musicStyleDetail}
            />
            )}
            {params.musicStyleDetail === "anecdotes" && (
              <AnnecdoteComponent
                musicStyle = {params.musicStyle}
                musicStyleDetail = {params.musicStyleDetail}
              />
            )}
            {params.musicStyleDetail === "links" && (
              <LinksComponent
                musicStyle = {params.musicStyle}
                musicStyleDetail = {params.musicStyleDetail}
              />
            )}              
        </div>
        )}
      </Context.Consumer>
    );
  }
}
