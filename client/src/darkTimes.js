import React from 'react';

import logo from './logo.svg';

import './darkTimes.css';

class darkTimes extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://mail.ru")
        .then(response => response.json())
        .then(json => this.setState({posts: json}));
  }

  render() {
    return (
        <div className="darkTimes">
          <header className="darkTimes-header">
            <img src={logo} className="darkTimes-logo" alt="logo"/>
            <p>
              Edit <code>src/darkTimes.js</code> and save to reload.
            </p>
            <a
                className="darkTimes-link"
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

export default darkTimes;