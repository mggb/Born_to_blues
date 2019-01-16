import React from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationBar,
    NavigationSubDetails,
    NavigationDetails
} from "../NavigationBar/index";
import { Context } from "../../App";

type Props = {
    musicStyle: string,
    musicStyleDetail: string,
    musicStyleSubDetail: string
};

const SubArtistsComponent = (props: Props) => (
    <Context.Consumer>
        {({ MUSIC_DETAILS }) => (
            <div>
                <h2> {pointFreeUpperCase(props.musicStyleSubDetail)}</h2>
                <NavigationBar />
                <NavigationSubDetails
                    // Example array of sub-details
                    arrayElement={["links 01", "links 02"]}
                    musicStyle={props.musicStyle}
                    musicDetail={props.musicStyleDetail}
                />
                <NavigationDetails
                    arrayElement={MUSIC_DETAILS}
                    musicStyle={props.musicStyle}
                />
            </div>
        )}
    </Context.Consumer>
)
export default SubArtistsComponent;
