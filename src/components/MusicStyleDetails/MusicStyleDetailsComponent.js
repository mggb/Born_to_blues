// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationBar, NavigationDetails } from "../NavigationBar/index";
import "./styles/MusicStyleDetailsComponent.css";
import { Context } from "../../App";

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
            <h2> Details: {pointFreeUpperCase(params.musicStyleDetail)}</h2>
            <NavigationBar />

            {params.musicStyle !== "blues" ? (
              <NavigationDetails
                arrayElement={MUSIC_DETAILS}
                musicStyle={params.musicStyle}
              />
            ) : (
              <NavigationDetails
                arrayElement={BLUES_DETAILS}
                musicStyle={params.musicStyle}
              />
            )}
          </div>
        )}
      </Context.Consumer>
    );
  }
}
