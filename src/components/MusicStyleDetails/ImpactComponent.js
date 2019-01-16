import React from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails,
    NavigationSubDetails
} from "../NavigationBar/index";
import { Context } from "../../App";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
    params: {
        musicStyle: string,
        musicStyleDetail: string
    },
    translateFunction: {
        translate: string => string
    }
};


const ImpactComponent = (props: Props) => (
    <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
            <div className="currentStyle">
                <div className="styleContainer">
                    <div className="vinyleStyleContainer">
                        <div className="vinyleStyleContent">
                            <div className="">
                                <h2 className="">{pointFreeUpperCase(props.musicStyleDetail)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="contentContainer">
                        <div className="">
                            <NavigationSubDetails
                                musicStyle={props.musicStyle}
                                musicDetail={props.musicStyleDetail}
                                arrayElement={["Jimi Hendrix", "Chuck Berry", "The Rollings Stones", "Elvis Presley"]}
                            />
                            <p>component Impact from Blues style</p>
                        </div>
                    </div>
                </div>
                <div className="wizzardNavContainer">
                    {props.musicStyle === "blues" ? (
                        <NavigationDetails
                            arrayElement={BLUES_DETAILS}
                            musicStyle={props.musicStyle}
                        />
                    ) : (
                            <NavigationDetails
                                arrayElement={MUSIC_DETAILS}
                                musicStyle={props.musicStyle}
                            />
                        )}
                </div>
            </div>
        )}
    </Context.Consumer>)

export default ImpactComponent