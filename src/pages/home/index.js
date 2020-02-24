
import React from 'react'

import { TabBar } from 'antd-mobile';

import {Route} from 'react-router-dom'

// // 引入4个组件
import Index from './index/index'
import Found from './found'
import News from './news'
import My from './my'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };

    // 判断url，如果是/home则让它重定向/home/index
    console.log(this.props);
    if(this.props.match.path==='/home'){
        this.props.history.push('/home/index')
    }
    
  }

  

  render() {
    return (
      <div style={ {position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#2db87c"
          barTintColor="white"
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
            selected={this.props.location.pathname === "/home/index"}
            onPress={() => {
                this.props.history.push('/home/index')
            }}
            data-seed="logId"
          >
            
            <Route component={Index} path='/home/index'></Route>
            
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
            selected={this.props.location.pathname === "/home/found"}
            onPress={() => {
              this.props.history.push('/home/found')
            }}
          >
            
            <Route component={Found} path='/home/found'></Route>
            
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
            selected={this.props.location.pathname === "/home/news"}
            onPress={() => {
                this.props.history.push('/home/news')
            }}
          >
          
          <Route component={News} path='/home/news'></Route>
          
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
            selected={this.props.location.pathname === "/home/my"}
            onPress={() => {
                this.props.history.push('/home/my')
            }}
          >
            
            <Route component={My} path='/home/my'></Route>
            
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home