// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavigationBar.css";
import pointFreeUpperCase from "../../utils/pointFreeUpperCase";

const MUSIC_STYLES: Array<string> = ["rap", "jazz", "country", "rock"];

/**
 *  Navigation Bar Component
 */
export const NavigationBar = () => (
  <div className="navigation_container">
    {MUSIC_STYLES.map(musicStyle => (
      <div className="navigation_element" key={musicStyle}>
        <Link to={`/${musicStyle}`}>{musicStyle}</Link>
      </div>
    ))}
  </div>
);

/**
 *  Navigation Details Component
 */
export const NavigationDetails = ({ arrayElement, musicStyle }) =>
  arrayElement.map(detail => (
    <li key={detail}>
      <Link to={detail !== "blues" ? `/${musicStyle}/${detail}` : `/${detail}`}>
        {pointFreeUpperCase(detail)}
      </Link>
    </li>
  ));
