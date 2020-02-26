import React from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios'
import Indexcss from './index.module.scss'
import Searchinput from '../../../components/search'


// 引入图片
import Nav1 from '../../../assets/images/nav-1.png'
import Nav2 from '../../../assets/images/nav-2.png'
import Nav3 from '../../../assets/images/nav-3.png'
import Nav4 from '../../../assets/images/nav-4.png'

class index extends React.Component {
  state = {
    swiperList: [],
    zufang: [],
    founds: [],
    classification: [
      { id: 0, text: '整租', src: Nav1 },
      { id: 1, text: '合租', src: Nav2 },
      { id: 2, text: '地图找房', src: Nav3 },
      { id: 3, text: '去出租', src: Nav4 }
    ]
  }
  componentDidMount() {
    // 调用轮播图
    this.getswiperlist();
    // 租房
    this.getzufang();
    // 最新资讯
    this.getfound()
  }

  // 轮播图数据
  getswiperlist = () => {
    axios.get('http://157.122.54.189:9060/home/swiper')
      .then(res => {
        // console.log(res);
        this.setState({
          swiperList: res.data.body
        })
      })
  }

  // 租房小组
  getzufang = () => {
    axios.get('http://157.122.54.189:9060/home/groups?area=AREA%7C88cff55c-aaa4-e2e0')
      .then(res => {
        // console.log(res);
        this.setState({
          zufang: res.data.body
        })

      })
  }

  // 最新资讯
  getfound = () => {
    axios.get('http://157.122.54.189:9060/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
      .then(res => {
        // console.log(res);
        this.setState({
          founds: res.data.body
        })
      })
  }
  render() {
    return (
      <div className="hkzfone">
        {/* 搜索框 */}
        

        {/* 轮播图 */}
        <div className={Indexcss.swiper}>
        <div className={Indexcss.city_input_row}> <Searchinput></Searchinput></div>

          {this.state.swiperList.length && <Carousel


            autoplay
            infinite
          //  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          //  afterChange={index => console.log('slide to', index)}
          >
            {this.state.swiperList.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
              //  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={"http://157.122.54.189:9060" + val.imgSrc}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    //  window.dispatchEvent(new Event('resize'));
                    //  this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>}
        </div>

        {/* 分类部分 */}
        <div className={Indexcss.main}>
          {this.state.classification.map(v =>
            <div className={Indexcss.nav_item} key={v.id}>
              <img src={v.src} alt="" />
              <p>{v.text}</p>
            </div>
          )}
        </div>


        {/* 租房部分 */}
        <div className={Indexcss.zufang_boss}>
          <div className={Indexcss.zufang_top}>
            <h3>租房小组</h3>
            <span>更多</span>
          </div>
          <div className={Indexcss.zufang}>
            {this.state.zufang.map(v => <div className={Indexcss.zufang_item} key={v.id}>
              <div className={Indexcss.item_left}>
                <div className={Indexcss.left_top}>{v.title}</div>
                <p>{v.desc}</p>
              </div>
              <div className={Indexcss.imgs}><img src={"http://157.122.54.189:9060" + v.imgSrc} alt="" /></div>

            </div>)}
          </div>
        </div>

        {/* 最新资讯 */}
        <div className={Indexcss.found}>
          <div className={Indexcss.found_title}>最新资讯</div>
          <div className={Indexcss.found_main}>
            {this.state.founds.map(v =>
              <div className={Indexcss.main_item} key={v.id}>
                <div className={Indexcss.item_left}>
                  <img src={"http://157.122.54.189:9060" + v.imgSrc} alt="" />
                </div>
                <div className={Indexcss.main_right}>
                  <div className={Indexcss.right_title}>{v.title}</div>
                  <div className={Indexcss.right_button}>
                    <div className={Indexcss.button_left}>{v.from}</div>
                    <div className={Indexcss.button_right}>{v.date}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default index