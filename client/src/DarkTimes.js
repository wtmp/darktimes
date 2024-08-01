import React from 'react';

import logo from './logo.svg';

import './DarkTimes.css';

class DarkTimes extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // fetch("https://mail.ru")
    //     .then(response => response.json())
    //     .then(json => this.setState({posts: json}));
  }

  render() {
    return (
        <div className="DarkTimes">
          <header className="DarkTimes-header">
            <img src={logo} className="DarkTimes-logo" alt="logo"/>
            <p>
              Edit <code>src/DarkTimes.js</code> and save to reload.
            </p>
            <a
                className="DarkTimes-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
              <dev>

              </dev>
          </header>
        </div>
    );
  }
}

export default DarkTimes;