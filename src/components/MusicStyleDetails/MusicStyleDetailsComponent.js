// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
  NavigationBar,
  NavigationDetails,
  NavigationSubDetails
} from "../NavigationBar/index";
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
            <NavigationBar />
            <div className="currentStyle">
                <div className="styleContainer">
                    <div className="vinyleStyleContainer">
                        <div className="vinyleStyleContent">
                            <div className="">
                                <h2 className="">{pointFreeUpperCase(params.musicStyleDetail)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contentContainer">
                        <div className="">
                          {params.musicStyleDetail === "links" && (
                            <NavigationSubDetails
                              // Example array of sub-details
                              arrayElement={["instruments", "electric-guitar"]}
                              musicStyle={params.musicStyle}
                              musicDetail={params.musicStyleDetail}
                            />
                          )}
                        </div>
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
        </div>
        )}
      </Context.Consumer>
    );
  }
}
