// @flow

import React, { Component } from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationDetails } from "../NavigationBar/index";
import "./styles/MusicStyleComponent.css";
import { Context } from "../../App";
import vinyle from "../../assets/img/vinyle-rock.png";

// import header Component
import HeaderComponent from "../../utils/headerComponent";

type Props = {
  params: string,
  translateFunction: {
    translate: string => string
  }
};

type State = {
  musicStyle: any
};

/**
 *  Music Style Component
 */

export default class MusicStyleComponent extends Component<Props, State> {
  state = {
    musicStyle: { description: "", pitch: "" }
  };

  /**
   *  Function to create the detail list
   * @param {Array<string>} arrayElement - The array of blues categories
   * @param {string} musicStyle - The music style param in the url.
   */

  componentDidMount = () => {
    const { params } = this.props;
    fetch(`http://127.0.0.1:3333/api/music-style/${params}`)
      .then(res => res.json())
      .then(musicStyle => this.setState({ musicStyle: musicStyle[0] }));
  };

  render() {
    const { params } = this.props;
    const { musicStyle } = this.state;

    return (
      <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
          <div>
            <HeaderComponent params={params} />
            <div id="musicWrap">
              <div className="flex">
                <h1>{pointFreeUpperCase(params)}</h1>
                <div className="vinyle">
                  <img src={musicStyle.img} alt="vinyle" />
                </div>
                <p>{musicStyle.pitch}</p>
              </div>
              <ul className="navDetails">
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
              </ul>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
