// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationBar, NavigationDetails } from "../NavigationBar/index";
import "./styles/MusicStyleComponent.css";
import { Context } from "../../App";
import vinyle from "../../assets/img/vinyle-rock.png"

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
            <div className="currentStyle">
                <div className="styleContainer">
                    <div className="vinyleStyleContainer">
                        <div className="vinyleStyleContent">
                            <div className="styleTitleContainer">
                                <h2 className="styleTitle">{pointFreeUpperCase(params)}</h2>
                            </div>
                            <div className="peachImageContainer">
                                <img className="vinyle" src={vinyle} alt="vinyle"/> 
                            </div>
                        </div>
                    </div>
                    <div className="contentContainer">
                        <p>What started off as an underground movement nearly 70 years ago has evolved to be the soundtrack of the lives of an entire generation and all its historic moments. Rock music’s long, storied past has made it a versatile style of music beloved by many.
                        The style and musicality of rock music was heavily influenced by blues traditions and rhythm and blues (also known as R&B) from the early 20th century let us introduce how blues influenced Rock’n Roll
                        </p>
                    </div>
                </div>
                <div className="wizzardNavContainer">
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
                </div>
            </div>
            <NavigationBar />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
