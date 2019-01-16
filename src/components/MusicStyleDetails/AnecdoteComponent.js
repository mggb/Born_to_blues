import React from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationBar,
    NavigationDetails,
    NavigationSubDetails
  } from "../NavigationBar/index";
  import { Context } from "../../App";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];


export default class Anectodes extends React.Component<Props>{
    render(){
        const params= this.props;       
        return(
            <Context.Consumer>
                {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
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
                                    <NavigationSubDetails 
                                        musicStyle = {params.musicStyle}
                                        musicDetail = {params.musicStyleDetail}
                                        arrayElement={["Jimi Hendrix", "Chuck Berry", "The Rollings Stones", "Elvis Presley"]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="wizzardNavContainer">
                            {params === "blues" ? (
                            <NavigationDetails
                                arrayElement={BLUES_DETAILS}
                                musicStyle={params.musicStyle}
                            />
                            ) : (
                            <NavigationDetails
                                arrayElement={MUSIC_DETAILS}
                                musicStyle={params.musicStyle}
                            />
                            )}
                        </div>
                    </div>
                )}
            </Context.Consumer>
        );
    }
}