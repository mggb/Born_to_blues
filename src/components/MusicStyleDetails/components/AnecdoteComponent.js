import React, { Component } from "react";
import { Player } from "video-react";
import { NavigationSubDetails } from "../../NavigationBar";
import annecdoteVideo from "../../../assets/video/video_introduction.mp4";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
  musicStyle: string,
  musicStyleDetail: string,
  musicStyleState: any
};

export default class AnecdoteComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      buttonVideo: "play"
    };
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  videoToggle = () => {
    const { player } = this.state;
    if (player.paused) {
      this.player.play();
      this.setState({
        buttonVideo: "pause"
      });
    } else {
      this.player.pause();
      this.setState({
        buttonVideo: "play"
      });
    }
  };

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
    if (state.ended) {
      this.setState({
        buttonVideo: "play"
      });
    }
  }

  render() {
    const { buttonVideo } = this.state;
    const { musicStyleDetail, musicStyle, musicStyleState } = this.props;
    const arrayElement = musicStyleState.map(e => e.name);
    return (
      <section id="anecdote">
        <div className="text">
          <div>
            <h2>Ducky walk</h2>
            <p>{musicStyleState.description}</p>
            <button type="button" onClick={this.videoToggle}>
              <i className={`fas fa-${buttonVideo}`} />
            </button>
          </div>
        </div>
        <div className="video">
          <div>
            <Player
              playsInline
              src={annecdoteVideo}
              // eslint-disable-next-line
              ref={elm => (this.player = elm)}
            />
          </div>
        </div>
        <div className="nav">
          <h3>More anecdotes</h3>
          <ul>
            <NavigationSubDetails
              musicStyle={musicStyle}
              musicDetail={musicStyleDetail}
              arrayElement={arrayElement}
            />
          </ul>
        </div>
      </section>
    );
  }
}
