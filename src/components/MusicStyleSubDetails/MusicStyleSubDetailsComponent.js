//
import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import "./styles/MusicStyleSubDetailsComponent.css";
import { propEq, find } from "ramda";

// import musician logo
import hendrix from "../../assets/img/vinyle-jimmi-hendrix.png";
import presley from "../../assets/img/vinyle-elvis-presley.png";
import stones from "../../assets/img/vinyle-rolling-stones.png";

// import header Component
import HeaderComponent from "../../utils/headerComponent";

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
    logo: stones,
    name: "stones"
  }
];

type Props = {
  params: {
    musicStyle: string,
    musicStyleDetail: string,
    musicStyleSubDetail: string
  },
  translateFunction: {
    translate: string => string
  }
};

type State = {
  musicStyleState: any
};

const SUB_DETAILS = ["instruments", "electric-guitar"];

export default class MusicStyleSubDetailsComponent extends Component<
  Props,
  State
> {
  state = {
    musicStyleState: null
  };

  filterNavSubDetails = (element: any) => {
    SUB_DETAILS.filter(item => item !== element);
  };

  /**
   *  Function to create the musician links
   * @param {Array} musicians - The array of musicians
   * @returns {Array<any>}
   */
  renderArtistsLinks = (musicians: Array<any>): Array<any> =>
    musicians.map(musician => (
      <div key={musician.name}>
        <Link to={`/${musician.name}`}>
          <img src={musician.logo} alt={`${musician.name} musician logo`} />
        </Link>
      </div>
    ));

  renderNavigationSubDetails = (
    arrayElement,
    musicStyle,
    musicDetail: {
      arrayElement: Array<string>,
      musicStyle: string,
      musicDetail: string
    }
  ): Array<any> =>
    arrayElement.map(detail => (
      <li key={detail}>
        <Link to={`/${musicStyle}/${musicDetail}/${detail}`} />
      </li>
    ));

  componentWillMount = () => {
    const {
      params: { musicStyle, musicStyleDetail, musicStyleSubDetail }
    } = this.props;
    console.log(this.props);
    fetch(
      `http://127.0.0.1:3333/api/${
        musicStyleDetail === "links" ? "influence" : musicStyleDetail
      }/${musicStyle}`
    )
      .then(res => res.json())
      .then(musicStyleState => {
        this.setState({
          musicStyleState: find(propEq("name", musicStyleSubDetail))(
            musicStyleState
          )
        });
      });
  };

  render() {
    const { params } = this.props;
    const { musicStyleState } = this.state;

    return (
      <section>
        <HeaderComponent params={params} />
        <div id="wrap">
          <div className="flex">
            <h1>
              <span>{pointFreeUpperCase(params.musicStyleSubDetail)}</span>
            </h1>

            <section id="artistDetails">
              <div className="content">
                <Link
                  className="back"
                  to={`/${params.musicStyle}/${params.musicStyleDetail}`}
                >
                  <i className="fas fa-long-arrow-alt-left" />
                </Link>
                <h2>{musicStyleState && musicStyleState.title}</h2>
                <p className="text">
                  {musicStyleState && musicStyleState.description}
                </p>
                <div>
                  <div className="playMusic">
                    <a href="/">
                      <i className="fas fa-play" />
                    </a>
                    <div>
                      <p>Drift&apos;n Blues</p>
                      <p>Eric Clapton</p>
                    </div>
                  </div>
                  <div className="playMusic">
                    <a href="/">
                      <i className="fas fa-play" />
                    </a>
                    <div>
                      <p>Drift&apos;n Blues</p>
                      <p>Eric Clapton</p>
                    </div>
                  </div>
                </div>
                <ul className="navSubDetails">
                  {this.renderNavigationSubDetails(
                    SUB_DETAILS,
                    params.musicStyle,
                    params.musicStyleDetail
                  )}
                </ul>
              </div>
              <div className="nav">{this.renderArtistsLinks(MUSICIANS)}</div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
