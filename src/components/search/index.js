import React, { Component } from "react";
import IndexCss from "./index.module.scss";
import { connect } from "react-redux";
class CityInput extends Component {
  render() {
    return (
      <div className={IndexCss.city_input_wrap}>
        <div className={IndexCss.city_input}>
          <div className={IndexCss.city_name}>
            <span>{this.props.cityName}</span>
            {/* 字体图标 既可以使用上 iconfont的类名  同时 这个类名也可以被我们的局部样式所失败和使用 */}
            <i className={" iconfont icon-arrow " + IndexCss["icon-arrow"]}></i>
          </div>
          <div className={IndexCss.city_search}>
            <i className={"iconfont icon-seach " + IndexCss["icon-seach"]}></i>
            <span>其输入小区或地址</span>
          </div>
        </div>
        <div className={IndexCss.city_map}>
          <span className={"iconfont icon-map " + IndexCss["icon-map"]}></span>
        </div>
      </div >
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    cityName: state.mapcreater.city.name
  }
}


export default connect(mapStoreToProps, null)(CityInput);
