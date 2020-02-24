import React from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios'

class index extends React.Component {
  state = {
    swiperList:[],
    imgHeight: 176,
    flag:false
  }
  componentDidMount() {
   this.getswiperlist()
  }
  getswiperlist=()=>{
      axios.get('http://157.122.54.189:9060/home/swiper')
      .then(res=>{
        console.log(res);
        this.setState({
          swiperList:res.data.body,
          flag:true
        })
        
      })
  }
  render() {
    return (
        <Carousel
          autoplay={this.state.flag}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.swiperList.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={"http://157.122.54.189:9060"+val.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

export default index