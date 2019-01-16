// @flow
import React, { Component } from "react";
import SubLinksComponent from "./SubLinksComponent";
import SubArtistsComponent from "./SubArtistsComponent";
import logo from "../../assets/img/logo.png";
import {Link} from "react-router-dom";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import './styles/MusicStyleSubDetailsComponent.css'

// import musician logo
import hendrix from '../../assets/img/vinyle-jimmi-hendrix.png';
import presley from '../../assets/img/vinyle-elvis-presley.png';
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
    logo: stones,
    name: "stones"
  },
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
    musicians.map((musician) => {
      // }
      return (
        <div key={musician.name}>
          <Link
            to={`/${musician.name}`}
          >
            <img src={musician.logo} alt={`${musician.name} musician logo`}/>
          </Link>
        </div>
      )
    });

  renderNavigationSubDetails = (
                          arrayElement,
                          musicStyle,
                          musicDetail
                        : {
    arrayElement: Array<string>,
    musicStyle: string,
    musicDetail: string
  }): Array<any> =>
    arrayElement.map(detail => (
      <li key={detail}>
        <Link to={`/${musicStyle}/${musicDetail}/${detail}`}>
          {/*{pointFreeUpperCase(detail)}*/}
        </Link>
      </li>
    ));

  render() {
    const { params } = this.props;
    return (
      <section>
        <section id="header">
          <img src={logo} alt="website logo"/>
          <Link to={`/${params.musicStyle}`}>
            {params.musicStyle}
          </Link>
        </section>
        <div id="wrap">
          <div className="flex">
            <h1>{pointFreeUpperCase(params.musicStyleSubDetail)}</h1>


            <section id="artistDetails">
              <div className="title"> </div>
              <div className="content">
                <Link className="back" to={`/${params.musicStyle}/${params.musicStyleDetail}`}>
                  <i className="fas fa-long-arrow-alt-left"/>
                </Link>
                <h2>phrase sur le groupe</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet cum deleniti dicta ipsum laudantium placeat repudiandae temporibus unde? Amet architecto culpa ipsum iste molestias odio optio sequi suscipit vitae voluptate.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum deleniti dicta ipsum laudantium placeat repudiandae temporibus unde? Amet architecto culpa ipsum iste molestias odio optio sequi suscipit vitae voluptate.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum deleniti dicta ipsum laudantium culpa ipsum iste molestias odio optio sequi suscipit vitae voluptate.
                </p>
                <div>
                  <div className="playMusic">
                    <a href="#">
                      <i className="fas fa-play"/>
                    </a>
                    <div>
                      <p>Drift'n Blues</p>
                      <p>Eric Clapton</p>
                    </div>
                  </div>
                  <div className="playMusic">
                    <a href="#">
                      <i className="fas fa-play"/>
                    </a>
                    <div>
                      <p>Drift'n Blues</p>
                      <p>Eric Clapton</p>
                    </div>
                  </div>
                </div>
                <ul className="navSubDetails">
                  {this.renderNavigationSubDetails(SUB_DETAILS, params.musicStyle, params.musicStyleDetail)}
                </ul>
              </div>
              <div className="nav">{this.renderArtistsLinks(MUSICIANS)}</div>
            </section>


            {/*{params.musicStyleDetail === "artists" && (*/}
              {/*<SubArtistsComponent*/}
                {/*arrayElement={SUB_DETAILS}*/}
                {/*musicStyle={params.musicStyle}*/}
                {/*musicDetail={params.musicStyleDetail}*/}
                {/*musicStyleSubDetail={params.musicStyleSubDetail}*/}
              {/*/>*/}
            {/*)}*/}
            {/*{params.musicStyleDetail === "links" && (*/}
              {/*<SubLinksComponent*/}
                {/*arrayElement={SUB_DETAILS}*/}
                {/*musicStyle={params.musicStyle}*/}
                {/*musicDetail={params.musicStyleDetail}*/}
                {/*musicStyleSubDetail={params.musicStyleSubDetail}*/}
              {/*/>*/}
            {/*)}*/}

          </div>
        </div>
      </section>
    );
  }
}
