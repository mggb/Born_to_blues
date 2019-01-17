import React from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails,
    NavigationSubDetails
} from "../NavigationBar/index";
import { Context } from "../../App";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
    musicStyle: string,
    musicStyleDetail: string
};


const ThemeComponent = (props: Props) => (
    <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
          <div id="wrap">
              <div className="flex">
                  <h1><span>{pointFreeUpperCase(props.musicStyleDetail)}</span></h1>
                  <section id="theme">
                      <NavigationSubDetails
                        musicStyle={props.musicStyle}
                        musicDetail={props.musicStyleDetail}
                        arrayElement={["Jimi Hendrix", "Chuck Berry", "The Rollings Stones", "Elvis Presley"]}
                      />
                  </section>
              </div>
              <ul className="navDetails">
                  {props.musicStyle === "blues" ? (
                    <NavigationDetails
                      arrayElement={BLUES_DETAILS}
                      musicStyle={props.musicStyle}
                      currentDetail={props.musicStyleDetail}
                    />
                  ) : (
                    <NavigationDetails
                      arrayElement={MUSIC_DETAILS}
                      musicStyle={props.musicStyle}
                      currentDetail={props.musicStyleDetail}
                    />
                  )}
              </ul>
          </div>
        )}
    </Context.Consumer>)

export default ThemeComponent