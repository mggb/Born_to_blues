import React from "react";
import { NavigationSubDetails } from "../../NavigationBar";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
  musicStyle: string,
  musicStyleDetail: string,
  musicStyleState: any
};

const ThemeComponent = (props: Props) => {
  const { musicStyle, musicStyleDetail, musicStyleState } = props;
  const arrayElement = musicStyleState.map(e => e.name);
  return (
    <section id="theme">
      <NavigationSubDetails
        musicStyle={musicStyle}
        musicDetail={musicStyleDetail}
        arrayElement={arrayElement}
      />
    </section>
  );
};

export default ThemeComponent;
