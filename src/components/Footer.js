import React, { Component } from 'react';
/*import { Link } from 'gatsby';
/*import netlify from '../../content/thumbnails/netlify.svg';
import gatsby from '../../content/thumbnails/gatsby.webp';
/* import github from '../../content/images/github.png'; */

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div>
            {/* <a href="https://ko-fi.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Ko-Fi
          </a>
          <a href="https://patreon.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Patreon
          </a> */}
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </div>

          </div>
      </footer>
    );
  }
}
