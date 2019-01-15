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
export const NavigationDetails = ({
  arrayElement,
  musicStyle
}: {
  arrayElement: Array<string>,
  musicStyle: string
}): Array<any> =>
  arrayElement.map(detail => (  
    <li key={detail} className="wizzardElement">
        <Link to={detail !== "blues" ? `/${musicStyle}/${detail}` : `/${detail}`}>
        {pointFreeUpperCase(detail)}
        <div className="wizzard"></div>
      </Link>
    </li>
  ));

/**
 *  Navigation Details Component
 */
export const NavigationSubDetails = ({
  arrayElement,
  musicStyle,
  musicDetail
}: {
  arrayElement: Array<string>,
  musicStyle: string,
  musicDetail: string
}): Array<any> =>
  arrayElement.map(detail => (
    <div className="">
      <li key={detail}>
        <Link to={`/${musicStyle}/${musicDetail}/${detail}`}>
          {pointFreeUpperCase(detail)}
        </Link>
      </li>
    </div>
  ));
