import React, { Component } from 'react';
import Tweet from './tweet'

class TweetRiver extends Component {

  renderRecent() {
    return this.props.recentTweets.map( (tweet, index) => 
      <Tweet key={index} tweet={tweet}/>
    )
  }

  render () {
    return (
      <ul>
        {this.renderRecent()}
      </ul>
    )
      
  }
}

export default TweetRiver;