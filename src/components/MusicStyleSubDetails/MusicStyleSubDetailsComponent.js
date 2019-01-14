// @flow

import React, { Component } from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
  NavigationBar,
  NavigationSubDetails,
  NavigationDetails
} from "../NavigationBar/index";
import "./styles/MusicStyleSubDetailsComponent.css";
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

const SUB_DETAILS = ["instruments", "electric-guitar"];

export default class MusicStyleSubDetailsComponent extends Component<
  Props,
  State
> {
  state = {};

  filterNavSubDetails = element => {
    SUB_DETAILS.filter(item => item !== element);
  };

  render() {
    const { params } = this.props;
    return (
      <Context.Consumer>
        {({ MUSIC_DETAILS }) => (
          <div>
            <h2>
              SubDetails: {pointFreeUpperCase(params.musicStyleSubDetail)}
            </h2>
            <NavigationBar />

            <NavigationDetails
              arrayElement={MUSIC_DETAILS}
              musicStyle={params.musicStyle}
            />

            <h2>Sub details Navigation</h2>
            <NavigationSubDetails
              // Example array of sub-details
              arrayElement={SUB_DETAILS}
              musicStyle={params.musicStyle}
              musicDetail={params.musicStyleDetail}
            />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
