//
import React, { Component } from "react";
import { Link } from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import Vinyle from "../../utils/vinyle";
import "./styles/MusicStyleSubDetailsComponent.css";

// import musician logo
import hendrix from "../../assets/img/vinyle-jimmi-hendrix.png";
import presley from "../../assets/img/vinyle-elvis-presley.png";
import stones from "../../assets/img/vinyle-rolling-stones.png";

// import header Component
import HeaderComponent from "../../utils/headerComponent";
import AudioComponent from "./components/AudioComponent";

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

type State = {};

const SUB_DETAILS = ["instruments", "electric-guitar"];

export default class MusicStyleSubDetailsComponent extends Component<
  Props,
  State
> {
  state = {};

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
          <Vinyle img={musician.logo} alt={`${musician.name} musician logo`} />
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

  _onReady = (event, player) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    this.setState({
      [player]: event.target
    })
  }

  toggleMusic = (elm) => {
    let player = this.state[elm];
    if (player.getPlayerState() !== 1) {
      player.playVideo()
    } else {
      player.pauseVideo()
    }
  }

  render() {
    const { params } = this.props;

    const styleColor = '#a80000';

    const css = `
      #header a.headerLink:before{
          background: ${styleColor};
      }
      #header a.headerLink:after{
          background: ${styleColor};
      }
      .playMusic i {
          color: ${styleColor};
      }
      .playMusic button {
          border: 1px solid ${styleColor};
      }
      .playMusic div:before {
          background: ${styleColor};
      }
      .navSubDetails a.active:before{
          background: ${styleColor};
      }
    `;

    return (
      <section>
        <style>{css}</style>
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
                <h2>phrase sur le groupe</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  cum deleniti dicta ipsum laudantium placeat repudiandae
                  temporibus unde? Amet architecto culpa ipsum iste molestias
                  odio optio sequi suscipit vitae voluptate. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Amet cum deleniti
                  dicta ipsum laudantium placeat repudiandae temporibus unde?
                  Amet architecto culpa ipsum iste molestias odio optio sequi
                  suscipit vitae voluptate. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Amet cum deleniti dicta ipsum
                  laudantium culpa ipsum iste molestias odio optio sequi
                  suscipit vitae voluptate.
                </p>
                <div>
                  <AudioComponent
                    videoId="tgbNymZ7vqY"
                    music="Drift&apos;n Blues"
                    artist="Eric Clapton"
                  />
                  <AudioComponent
                    videoId="tgbNymZ7vqY"
                    music="Drift&apos;n Blues"
                    artist="Eric Clapton"
                  />
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
