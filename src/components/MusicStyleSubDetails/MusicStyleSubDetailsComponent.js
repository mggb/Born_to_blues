//
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { propEq, find, has } from "ramda";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import "./styles/MusicStyleSubDetailsComponent.css";

// import header Component
import HeaderComponent from "../../utils/headerComponent";

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

class MusicStyleSubDetailsComponent extends Component<Props, State> {
  state = {
    musicStyleState: null,
    navBarState: []
  };

  filterNavSubDetails = (element: any) => {
    SUB_DETAILS.filter(item => item !== element);
  };

  /**
   *  Function to create the musician links
   * @param {Array} musicians - The array of musicians
   * @returns {Array<any>}
   */
  renderArtistsLinks = (
    musicians: Array<any>,
    musicStyle,
    musicDetail
  ): Array<any> =>
    musicians.map(musician => (
      <div key={musician.name}>
        <Link
          onClick={() => {
            this.fetchData(musicStyle, musicDetail, musician.name);
          }}
          to={`/${musicStyle}/${musicDetail}/${musician.name}`}
        >
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
    this.fetchData(musicStyle, musicStyleDetail, musicStyleSubDetail);
  };

  fetchData = (musicStyle, musicStyleDetail, musicStyleSubDetail) => {
    const hasSong = has("songs");

    fetch(
      `http://127.0.0.1:3333/api/${
        musicStyleDetail === "links" ? "influence" : musicStyleDetail
      }/${musicStyle}`
    )
      .then(res => res.json())
      .then(musicStyleState => {
        this.setState({
          navBarState: musicStyleState,
          musicStyleState: find(propEq("name", musicStyleSubDetail))(
            musicStyleState
          )
        });
        if (musicStyleState.map(e => hasSong(e))) {
          fetch(`http://127.0.0.1:3333/api/song/${musicStyle}`)
            .then(res => res.json())
            .then(songs => {
              this.setState({ songs });
            });
        }
      });
  };

  render() {
    const { params } = this.props;
    const { musicStyleState, songs, navBarState } = this.state;

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
                {songs && (
                  <div>
                    <div className="playMusic">
                      <a href="/">
                        <i className="fas fa-play" />
                      </a>
                      <div>
                        <p>{songs[0].name}</p>
                        <p>{songs[0].author}</p>
                      </div>
                    </div>
                    <div className="playMusic">
                      <a href="/">
                        <i className="fas fa-play" />
                      </a>
                      <div>
                        <p>{songs[1].name}</p>
                        <p>{songs[1].author}</p>
                      </div>
                    </div>
                  </div>
                )}
                <ul className="navSubDetails">
                  {this.renderNavigationSubDetails(
                    SUB_DETAILS,
                    params.musicStyle,
                    params.musicStyleDetail
                  )}
                </ul>
              </div>
              <div className="nav">
                {this.renderArtistsLinks(
                  navBarState,
                  params.musicStyle,
                  params.musicStyleDetail
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(MusicStyleSubDetailsComponent);
