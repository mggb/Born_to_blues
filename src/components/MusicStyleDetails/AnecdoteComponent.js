import React, {Component} from "react";
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

export default class AnecdoteComponent extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            buttonVideo: 'play'
        }
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    videoToggle = () => {
        const {player} = this.state;
        if (player.paused){
            this.player.play();
            this.setState( {
                buttonVideo: 'pause'
            });
        } else {
            this.player.pause();
            this.setState( {
                buttonVideo: 'play'
            });
        }
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
        if (state.ended){
            this.setState( {
                buttonVideo: 'play'
            });
        }
    }

    render() {
        const {buttonVideo} = this.state;
        const {musicStyleDetail, musicStyle} = this.props;
        return (
          <Context.Consumer>
              {({ MUSIC_DETAILS, BLUES_DETAILS }) => (
                <div id="wrap">
                    <div className="flex">
                        <h1><span>{pointFreeUpperCase(musicStyleDetail)}</span></h1>
                        <section id="anecdote">
                            <div className="text">
                                <div>
                                    <h2>Ducky walk</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid dicta, doloribus fugit magni nesciunt!
                                    </p>
                                    <button type="button" onClick={this.videoToggle}><i className={`fas fa-${buttonVideo}`}/></button>
                                </div>
                            </div>
                            <div className="video">
                                <div>
                                    <Player
                                      playsInline
                                      src={annecdoteVideo}
                                      // eslint-disable-next-line
                                      ref={elm => this.player = elm}
                                    />
                                </div>
                            </div>
                            <div className="nav">
                                <h3>More anecdotes</h3>
                                <ul>
                                    <NavigationSubDetails
                                      musicStyle={musicStyle}
                                      musicDetail={musicStyleDetail}
                                      arrayElement={["Ducky Walk", "Rolling Stones", "Robert Plant"]}
                                    />
                                </ul>
                            </div>
                        </section>
                    </div>
                    <ul className="navDetails">
                        {musicStyle === "blues" ? (
                          <NavigationDetails
                            arrayElement={BLUES_DETAILS}
                            musicStyle={musicStyle}
                            currentDetail={musicStyleDetail}
                          />
                        ) : (
                          <NavigationDetails
                            arrayElement={MUSIC_DETAILS}
                            musicStyle={musicStyle}
                            currentDetail={musicStyleDetail}
                          />
                        )}
                    </ul>
                </div>
              )}
          </Context.Consumer>)
    }
}