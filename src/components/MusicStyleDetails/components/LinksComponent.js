import React from "react";
import { Link } from "react-router-dom";
import "../styles/LinksComponent.css";

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
  musicStyleDetail: string,
  musicStyleState: any
};

const LinksComponent = (props: Props) => (
  /**
   *  Function to create the links links
   * @param {Array} links - The array of links
   * @returns {Array<any>}
   */

  <section id="links">
    {props.musicStyleState.map(link => (
      <div key={link.name}>
        <h2>{link.name}</h2>
        <p>{link.title}</p>
        <Link
          to={`/${props.musicStyle}/${props.musicStyleDetail}/${link.name}`}
        >
          View more
        </Link>
      </div>
    ))}
  </section>
);

export default LinksComponent;
