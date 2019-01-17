// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import { NavigationDetails } from "../NavigationBar/index";
import "./styles/MusicStyleComponent.css";
import { Context } from "../../App";
import vinyle from "../../assets/img/vinyle-rock.png"
import logo from "../../assets/img/logo.png";



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
            <section id="header">
              <Link to='/'>
                <img src={logo} alt="website logo"/>
              </Link>
              <Link to='/' className="headerLink">
                {params}
              </Link>
            </section>
            <div id="musicWrap">
              <div className="flex">
                <h1>{pointFreeUpperCase(params)}</h1>
                <div className="vinyle">
                  <img src={vinyle} alt="vinyle"/>
                </div>
                <p>
                  What started off as an underground movement nearly 70 years ago has evolved to be the soundtrack of the lives of an entire generation and all its historic moments. Rock music’s long, storied past has made it a versatile style of music beloved by many.
                  The style and musicality of rock music was heavily influenced by blues traditions and rhythm and blues (also known as R&B) from the early 20th century let us introduce how blues influenced Rock’n Roll
                </p>
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
