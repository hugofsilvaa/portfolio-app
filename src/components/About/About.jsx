import React from "react";
import "./About.css";
import about from "./about-img.jpg";
import { FaRunning } from "react-icons/fa";
import { TiCameraOutline } from "react-icons/ti";
import { MdLocalMovies } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  DiJavascript,
  DiReact,
  DiGithubBadge,
  DiSass,
  DiTerminalBadge,
} from "react-icons/di";

export default function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-img'>
          <img src={about} alt='about_image' />
        </div>
        <div className='about-details'>
          <h1>Who am I ?</h1>
          <br />
          <p>
            Hello, I am Hugo Silva and I am a Junior Front-End Web Developer
            from Lisbon, Portugal persuing the dream to create revolutionary and
            innovative apps.
          </p>
          <br />
          <p>
            I have a strong financial background, been working in banks and
            recently in shared service!
          </p>
          <br />
          <p>Besides my professional occupation, I love to:</p>
          <br />
          <ul>
            <li>
              <FaRunning /> Runnning
            </li>
            <li>
              <TiCameraOutline /> Taking photos
            </li>
            <li>
              <MdLocalMovies /> Watching movies
            </li>
          </ul>
        </div>
      </div>
      <div className='tools-header'>
        <h1>Skills</h1>
      </div>
      <div className='tools-logos'>
        <IconContext.Provider value={{ size: "4rem" }}>
          <DiJavascript />
          <DiReact />
          <DiGithubBadge />
          <DiSass />
          <DiTerminalBadge />
        </IconContext.Provider>
      </div>
    </>
  );
}
