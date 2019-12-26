import * as http from '../utils/request'
import CONF from '../utils/baseUrl'

export function getBanners () {
  return http.get(`${CONF.EM_LOCATION}/banners`).then(result => result&&result.code===0&&result.data ? result.data : [])
}

export function getCategories () {
  return http.get(`${CONF.EM_LOCATION}/categories`).then(result => result&&result.code===0&&result.data ? result.data : [])
}

export function getRecommendGoods () {
  return http.get(`${CONF.EM_LOCATION}/recommend-goods`).then(result => result&&result.code===0&&result.data ? result.data : [])
}

export function getFloorInfo () {
  return http.get(`${CONF.EM_LOCATION}/floor-info`).then(result => result&&result.code===0&&result.data ? result.data : null)
}