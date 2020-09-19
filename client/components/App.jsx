import React, { Component } from 'react';
import GlobalStyle from './GlobalStyle.jsx';
import Scene from './Scene.jsx';
import TextScroller from './TextScroller.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      section: 0,
      previous: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleReize = this.handleReize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleReize);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleReize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight})
  }

  handleScroll() {
    const { section, previous } = this.state;
    const current = Math.floor((document.documentElement.scrollTop / (window.innerHeight * 4) * 100) / 10);
    if (current !== section) {
      this.setState({ previous: section, scroll: document.documentElement.scrollTop, section: current });
    }
  }


  render() {
    const { width, height, scroll, section, previous } = this.state;
    return (
      <div>
        <GlobalStyle />
        <TextScroller section={ section } previous={ previous }/>
        <Scene width={ width } height={ height } scroll={ scroll } section={ section }/>
      </div>
    );
  }
}

export default App;
