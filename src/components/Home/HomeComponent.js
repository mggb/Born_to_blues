// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { map } from "ramda";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import "./styles/HomeComponent.css";

/** List of music styles */
const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

/** List of music styles formatted to be Pascal Case */
const formattedMusicStyles = map(pointFreeUpperCase, MUSIC_STYLES);

type Props = {
  translateFunction: {
    translate: string => string
  }
};

/**
 *  Home Component
 */

export default class HomeComponent extends Component<Props> {
  /**
   *  Function to create the music links
   * @param {Array<string>} musicStyles - The array of music styles
   * @returns {Array<any>}
   */
  renderMusicStyleLinks = (musicStyles: Array<string>): Array<any> =>
    musicStyles.map((musicStyle, index) => (
      <li key={musicStyle}>
        <Link to={`/${musicStyle}`}>{formattedMusicStyles[index]}</Link>
      </li>
    ));

  render() {
    // const {
    //   translateFunction: { translate }
    // } = this.props;

    return (
      <div id="home">
        {/* To access data from i18n => {translate("test")} */}
        <h2>Born to blues </h2>
        <ul>{this.renderMusicStyleLinks(MUSIC_STYLES)}</ul>
      </div>
    );
  }
}
