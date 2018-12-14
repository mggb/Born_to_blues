// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationBar, NavigationDetails } from "../NavigationBar/index";
import "./styles/MusicStyleComponent.css";
import { Context } from "../../App";

type Props = {
  params: string,
  translateFunction: {
    translate: string => string
  }
};

type State = {};

/**
 *  Music Style Component
 */

export default class MusicStyleComponent extends Component<Props, State> {
  state = {};

  /**
   *  Function to create the detail list
   * @param {Array<string>} arrayElement - The array of blues categories
   * @param {string} musicStyle - The music style param in the url.
   */

  render() {
    const { params } = this.props;

    return (
      <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <h2> Music Style: {pointFreeUpperCase(params)}</h2>
            {params === "blues" ? (
              <NavigationDetails
                arrayElement={BLUES_DETAILS}
                musicStyle={params}
              />
            ) : (
              <NavigationDetails
                arrayElement={MUSIC_DETAILS}
                musicStyle={params}
              />
            )}
            <NavigationBar />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
