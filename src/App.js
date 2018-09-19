import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './themeContext';
import ThemeBar from './components/ThemeBar';
// import NameCard from './components/NameCard';
// import LikesButton from './components/LikesButton';
// import DigitalClock from './components/DigitalClock';
// import CommentList from './components/CommentList';
// import CommentBox from './components/CommentBox';

const themes = {
  light: {
    className: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    className: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

// const tags = ["恐龙", "足球小子"]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    /* 4、 this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this) */
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(theme) {
    this.setState({
      theme,
    })
  }
  /* 4、 addComment(comments) {
    this.setState({
      comments: [...this.state.comments, comments]
    })
  } */
  render() {
    // const { comments } = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>

            <a href="#theme-switcher"
              className="btn btn-light"
              onClick={() => {this.changeTheme('light') }}
            >
              浅色主题
            </a>
            <a href="#theme-switcher"
              className="btn btn-secondary"
              onClick={() => { this.changeTheme('dark') }}
            >
              深色主题
            </a>
            <ThemeBar/>

          </header>
          {/* 1、 <NameCard name="King" number={1234567890} isHuman tags={ tags } /> */}
          {/* 2、 <LikesButton /> */}
          {/* 3、 <DigitalClock /> */}
          {/* 4、 <CommentList comments={comments} />
          <CommentBox 
            commentsLength={comments.length}
            onAddComment={this.addComment}
          /> */}
        </div>
        </ThemeContext.Provider>
    );
  }
}

export default App;
