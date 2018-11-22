import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import NavigationBar from "../navigationBar/index";

const MUSIC_DETAILS = ["artists", "similarities", "anecdotes"];

const BLUES_DETAILS = ["artists", "anecdotes", "impact", "origine", "themes"];

type Props = {
  params: string,
  translateFunction: {
    translate: string => string
  }
};

type State = {};

export default class MusicStyleComponent extends Component<Props, State> {
  state = {};

  listDetails = (arrayElement, musicStyle) =>
    arrayElement.map(detail => (
      <li key={detail}>
        <Link to={`/about/${musicStyle}/${detail}`}>
          {pointFreeUpperCase(detail)}
        </Link>
      </li>
    ));

  render() {
    const { params } = this.props;
    return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <h2> Music Style: {pointFreeUpperCase(params)}</h2>
        {params === "blues"
          ? this.listDetails(BLUES_DETAILS, params)
          : this.listDetails(MUSIC_DETAILS, params)}
        <NavigationBar />
      </div>
    );
  }
}
