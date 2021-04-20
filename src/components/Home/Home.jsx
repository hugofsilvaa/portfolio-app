import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className='home-container'>
      <div className='presentation'>
        <h1>Hello World!</h1>
        <h2>
          My name is Hugo Silva, <br></br>a Junior Front-End Web Developer
        </h2>
        <p>
          Passionate about innovation and technologies, so last year, in the
          middle of Covid pandemic, I have decided to start a Front-End Web
          Developer bootcamp
        </p>{" "}
        <br />
        <p>I am fluent in JavaScript and React</p>
        <p>
          and my main focus now is to develop a deeper knowledge on the
          languages having in mind the best practcises
        </p>
        <p>and applying that knowledge on personal and professional projects</p>
      </div>
      <div className='coding-gif'>
        <img
          src='https://media.giphy.com/media/WTjXuYA2y4o3UZly3W/giphy.gif'
          alt='coding GIF'
        />
      </div>
    </div>
  );
}
