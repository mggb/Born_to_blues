import React, { Component } from "react";
import { Link } from "react-router-dom";
import { map } from "ramda";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";

const MUSIC_STYLES = ["rap", "pop", "jazz", "country", "blues", "rock"];

const formattedMusicStyles = map(pointFreeUpperCase, MUSIC_STYLES);

type Props = {
  translateFunction: {
    translate: string => string
  }
};

export default class HomeComponent extends Component<Props> {
  renderMusicStyleLinks = () =>
    MUSIC_STYLES.map((musicStyle, index) => (
      <li key={musicStyle}>
        <Link to={`/about/${musicStyle}`}>{formattedMusicStyles[index]}</Link>
      </li>
    ));

  render() {
    const {
      translateFunction: { translate }
    } = this.props;

    return (
      <div>
        <h2>Route Home {translate("test")}</h2>
        <ul>{this.renderMusicStyleLinks()}</ul>
      </div>
    );
  }
}
