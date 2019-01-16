import React from "react";
import { Player } from 'video-react';
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";
import {
    NavigationDetails,
    NavigationSubDetails
} from "../NavigationBar/index";
import { Context } from "../../App";
import annecdoteVideo from '../../assets/video/video_introduction.mp4';

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
    musicStyle: string,
    musicStyleDetail: string
};


const AnecdoteComponent = (props: Props) => (
    <Context.Consumer>
        {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
          <div id="anecdoteWrap">
              <div className="flex">
                  <h1>{pointFreeUpperCase(props.musicStyleDetail)}</h1>
                  <section id="anecdote">
                      <div className="text">
                          <div>
                              <h2>Ducky walk</h2>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta, doloribus fugit magni nesciunt!
                              </p>
                              <button><i className="fas fa-play"/></button>
                          </div>
                      </div>
                      <div className="video">
                          <div>
                              <Player
                                playsInline
                                src={annecdoteVideo}
                              />
                          </div>
                      </div>
                      <div className="nav">
                          <h3>More anecdotes</h3>
                          <ul>
                              <NavigationSubDetails
                                musicStyle={props.musicStyle}
                                musicDetail={props.musicStyleDetail}
                                arrayElement={["Ducky Walk", "Rolling Stones", "Robert Plant"]}
                              />
                          </ul>
                      </div>
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
    </Context.Consumer>)

export default AnecdoteComponent