import React from "react";
import { NavigationSubDetails } from "../../NavigationBar";

// const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

type Props = {
  musicStyle: string,
  musicStyleDetail: string
};

const ThemeComponent = (props: Props) => {
  const { musicStyle, musicStyleDetail } = props;
  return (
    <section id="theme">
      <NavigationSubDetails
        musicStyle={musicStyle}
        musicDetail={musicStyleDetail}
        arrayElement={[
          "Jimi Hendrix",
          "Chuck Berry",
          "The Rollings Stones",
          "Elvis Presley"
        ]}
      />
    </section>
  );
};

export default ThemeComponent;
