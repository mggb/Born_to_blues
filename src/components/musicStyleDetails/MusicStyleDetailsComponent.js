import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import NavigationBar from "../navigationBar/index";

type Props = {
  params: string,
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
        <li>
          <Link to={`/about/${params.musicStyle}`}>
            Back to {params.musicStyle}
          </Link>
        </li>
        <h2> Details: {pointFreeUpperCase(params.musicStyleDetail)}</h2>
        <NavigationBar />
      </div>
    );
  }
}
