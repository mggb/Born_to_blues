import React from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails,
    NavigationSubDetails
} from "../NavigationBar/index";
import { Context } from "../../App";
import './styles/LinksComponent.css';

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
    musicStyle: string,
    musicStyleDetail: string
};


const LinksComponent = (props: Props) => (
    <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
            <div className="currentStyle">
                <div className="linksContainer">
                    <div className="linksTitleContainer">
                        <h2 className="linksTitle">{pointFreeUpperCase(props.musicStyleDetail)}</h2>
                        <div className="linksTitleWhiteLine" />
                    </div>
                    <div className="linksSubDetailsContainer">
                        <div className="linksSubDetailsList">
                            <NavigationSubDetails
                                musicStyle={props.musicStyle}
                                musicDetail={props.musicStyleDetail}
                                arrayElement={["Electric Guitar", "Rythmes and Blues", "Rock'n Teenagers"]}
                            />
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

export default LinksComponent