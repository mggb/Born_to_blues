import React from "react";
import { Link } from "react-router-dom";

// import musician logo
import hendrix from "../../../assets/img/vinyle-jimmi-hendrix.png";
import presley from "../../../assets/img/vinyle-elvis-presley.png";
import stones from "../../../assets/img/vinyle-rolling-stones.png";

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
    logo: presley,
    name: "berry"
  },
  {
    logo: stones,
    name: "stones"
  }
];

type Props = {
  musicStyle: string,
  musicStyleDetail: string,
  musicStyleState: any
};

const ArtistsComponent = (props: Props) => {
  console.log(props.musicStyleState);
  return (
    <section id="artist">
      <div>
        {props.musicStyleState.map(musician => (
          <div key={musician.name}>
            <Link
              to={`/${props.musicStyle}/${props.musicStyleDetail}/${
                musician.name
              }`}
            >
              <img src={musician.img} alt={`${musician.name} musician logo`} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsComponent;
