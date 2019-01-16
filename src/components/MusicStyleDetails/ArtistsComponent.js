import React from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails
} from "../NavigationBar/index";
import { Context } from "../../App";

// import musician logo
import hendrix from '../../assets/img/vinyle-jimmi-hendrix.png';
import presley from '../../assets/img/vinyle-elvis-presley.png';
import berry from '../../assets/img/vinyle-elvis-presley.png';
import stones from '../../assets/img/vinyle-rolling-stones.png';

/** Fake data */
const MUSICIANS: Array<any> = [
    {
        logo: hendrix,
        name: "hendrix"
    },
    {
        logo: presley,
        name: "presley"
    },
    {
        logo: berry,
        name: "berry"
    },
    {
        logo: stones,
        name: "stones"
    },
];

type Props = {
    musicStyle: string,
    musicStyleDetail: string
};


const ArtistsComponent = (props: Props) => {
    /**
     *  Function to create the musician links
     * @param {Array} musicians - The array of musicians
     * @returns {Array<any>}
     */
    const renderArtistsLinks = (musicians: Array<any>): Array<any> =>
      musicians.map((musician) => {
          return (
            <div key={musician.name}>
                <Link
                  to={`/${props.musicStyle}/${props.musicStyleDetail}/${musician.name}`}
                >
                    <img src={musician.logo} alt={`${musician.name} musician logo`}/>
                </Link>
            </div>
          )
      });

    return (
      <Context.Consumer>
          {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
            <div id="anecdoteWrap">
                <div className="flex">
                    <h1>{pointFreeUpperCase(props.musicStyleDetail)}</h1>
                    <section id="artist">
                        <div>{renderArtistsLinks(MUSICIANS)}</div>
                    </section>
                </div>
                <ul className="navDetails">
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
                </ul>
            </div>
          )}
      </Context.Consumer>
    )
}

export default ArtistsComponent