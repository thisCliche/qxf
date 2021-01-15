import Vue from 'vue'
import axios from 'axios'
import {Toast} from 'vant'
Vue.use(Toast);
const service = axios.create({
  baseURL: 'http://192.168.90.7:9527/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

service.interceptors.request.use(config => {
  // config.headers['Access-Token'] = window.localStorage.getItem('token') || null 
  // 需要一个游客的token
  config.headers['token'] = window.localStorage.getItem('token') || null
  return config
})
service.interceptors.response.use(responese => {
    return responese;
  },
  error => {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      Toast.fail('网络连接超时');
      return  // reject这个错误信息
    }
    if (error.message.includes('500')){
      Toast.fail('服务器崩了...');
      return ; // reject这个错误信息
    }
    return Promise.reject(error);
  }
)

// 获取banner图
export function getBanner(criCode) {
  return service({
    url: `appnews/jspaPhoto/getBanner?criCode=${criCode}`,
    method: 'post',
  })
}
// 获取banner图
export function getUserAvatar() {
  return service({
    url: `appnews/jspaPolicy/getUserAvatar`,
    method: 'post',
  })
}
// 获取新闻列表图
export function getNewsPhone(data) {
  return service({
    url: 'appnews/jspaPhoto/getNewsPhone',
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: data
  })
}

// 获取新闻列表
export function getpolicy(data) {
  return service({
    url: 'appnews/jspaPolicy/getpolicy',
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: data
  })
}

// 获取当前发布机构
export function getJspaJspaQuery(data) {
  return service({
    url: `appnews/jspaJspa/getJspaJspaQuery?criCode=${data}`,
    method: 'post',
  })
}

// 搜索接口
export function getJspaPolicy(data) {
  return service({
    url: 'appnews/jspaPolicy/getJspaPolicy',
    method: 'post',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: data
  })
}
// 获取下属区
export function getRegion(criCode) {
  return service({
    url: `appnews/jspaRegionInfo/getRegion?criCode=${criCode}`,
    method: 'post',
  })
}
// 获取下属区
export function getJscodeOpen(criCode) {
  return service({
    url: `appnews/jspaJspa/getJscodeOpen?criCode=${criCode}`,
    method: 'post',
  })
}