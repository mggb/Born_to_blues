import React from "react";
import { NavigationSubDetails } from "../../NavigationBar";

type Props = {
  musicStyle: string,
  musicStyleDetail: string
};

const ArtistsComponent = (props: Props) => {
  const { musicStyleDetail, musicStyle } = props;

  return (
    <section id="anecdote" className="influence">
      <div className="text">
        <div>
          <h2>Ducky walk</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid dicta, doloribus fugit magni nesciunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid dicta, doloribus fugit magni nesciunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid dicta, doloribus fugit magni nesciunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid dicta, doloribus fugit magni nesciunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid dicta, doloribus fugit magni nesciunt!
          </p>
        </div>
      </div>
      <div className="video">
        <div>
          <img src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt=""/>
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
  );
};

export default ArtistsComponent;
