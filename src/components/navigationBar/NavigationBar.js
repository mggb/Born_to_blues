import React from "react";
import { Link } from "react-router-dom";

const MUSIC_STYLES = ["rap", "pop", "jazz", "country", "blues", "rock"];

const navigationBar = () =>
  MUSIC_STYLES.map(musicStyle => (
    <li key={musicStyle}>
      <Link to={`/about/${musicStyle}`}>{musicStyle}</Link>
    </li>
  ));

export default navigationBar;
