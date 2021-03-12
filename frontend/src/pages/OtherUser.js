import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  
  render() {
    return (
      <div>
        graffiti wall
      </div>
    );
  }
}

export default Home;