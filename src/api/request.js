import axios from 'axios'
const service = axios.create({
  baseURl: 'http://192.168.90.7:8080',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// service.interceptors.request.use(config => {
//   config.headers['Access-Token'] = window.localStorage.getItem('token') || null 
//   return config
// })

// 获取省
export function getProvince() {
  return service({
    url: '/pachong/jsqaRegionInfo/getRegionProvince',
    method: 'post',
  })
}
// 获取市
export function getProvince(data) {
  return service({
    url: '/pachong/jsqaRegionInfo/getRegionCorrespondCity',
    method: 'post',
    data: data
  })
}