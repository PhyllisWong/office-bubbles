import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './blog.css';

class DesignNotes extends Component {
  render() {
    return (
      <div>
        <div className="blog-page">
          <div className="blog-entry">
            <h1>A New Beginning</h1>
            <p><b>By Joe Rezendes - October 2nd, 2018</b></p>
            <hr />
            <p>I've wanted to create my own web based game for years. And a few hours before writing this, I decided to finaly start.</p>
            <p>For several months I began playing around with interactive heros on homepages.
             I would spend more time than I'm proud of playing around on these.
             This lead to the thought that maybe, just maybe, other people would enjoy playing around with them too.</p>
             <p>Version 1 of Office Bubbles was taken directly from <a href="https://www.skedge.io">Skedge's</a> website.
              After importing the game over all I had to do was buy a domain and add some website features.</p>
             <p>In the end we were left with this!</p>
             <img height="300px" src ="https://image.ibb.co/hyEWMz/Screen_Shot_2018_10_02_at_2_52_02_AM.png" />
             <p>I'm also very excited to continue development.
             Some plans for the future include the following:</p>
             <ul>
              <li>Ways to create, edit, and delete bubbles</li>
              <li>Changing the background to make it relevent to whatever work you should be doing</li>
              <li>A few non intrusive ads that users can close out of. Maybe they can buy me coffee some day</li>
              <li>Loads and loads of new interactions</li>
              <li>An API to update this blog.</li>
              <li>A blimp that floats around Salesforce tower with the url in big bold letters 24/7</li>
             </ul>
             <p>If for whatever reason I don't update this blog then feel free to check the <a target="_blank" href="https://github.com/joerez/office-bubbles">GitHub Repo</a> for more updates.</p>
             <hr />
          </div>



        </div>
        <div className="center">
          <Link className="play-now" to="/">Play Now</Link>
        </div>
      </div>
    );
  };
};

export default DesignNotes