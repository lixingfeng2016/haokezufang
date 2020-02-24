import React from 'react'

import { TabBar } from 'antd-mobile';

class TabBarExample extends React.Component {
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
      <div style={ {position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#2db87c"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<i className="iconfont icon-ind" style={{
                width: '22px',
                height: '22px'}}/>
            }
            selectedIcon={<i className="iconfont icon-ind" style={{
                width: '22px',
                height: '22px'}}/>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            首页
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className="iconfont icon-findHouse" style={{
                    width: '22px',
                    height: '22px'}}/>
            }
            selectedIcon={
                <i className="iconfont icon-findHouse" style={{
                    width: '22px',
                    height: '22px'}}/>
            }
            title=" 找房"
            key="seach"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            22
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className="iconfont icon-infom" style={{
                    width: '22px',
                    height: '22px'}}/>
            }
            selectedIcon={
                <i className="iconfont icon-infom" style={{
                    width: '22px',
                    height: '22px'}}/>
            }
            title="资讯"
            key="news"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          33
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-myinfo" style={{
                width: '22px',
                height: '22px'}}/>}
            selectedIcon={<i className="iconfont icon-myinfo" style={{
                width: '22px',
                height: '22px'}}/>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            44
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample