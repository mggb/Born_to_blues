import React from "react";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails
} from "../NavigationBar/index";
import { Context } from "../../App";
import './styles/LinksComponent.css';
import {Link} from "react-router-dom";

const LINKS = [
  {
    exerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Electric Guitar"
  },
  {
    exerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Rythmes and Blues"
  },
  {
    exerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "Rock'n Teenagers"
  }
];

type Props = {
    musicStyle: string,
    musicStyleDetail: string
};


const LinksComponent = (props: Props) => {
    /**
     *  Function to create the links links
     * @param {Array} links - The array of links
     * @returns {Array<any>}
     */
    const renderLinks = (links: Array<any>): Array<any> =>
      links.map((link, index) => (
          <div key={index}>
              <h2>{link.name}</h2>
              <p>{link.exerpt}</p>
              <Link
                to={`/${props.musicStyle}/${props.musicStyleDetail}/${link.name}`}
              >
                  View more
              </Link>
          </div>
        )
      );

    return (
      <Context.Consumer>
          {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
            <div id="wrap">
                <div className="flex">
                  <h1><span>{pointFreeUpperCase(props.musicStyleDetail)}</span></h1>
                    <section id="links">
                        {renderLinks(LINKS)}
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
      </Context.Consumer>
    )
}

export default LinksComponent