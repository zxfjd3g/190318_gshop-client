/* 
包含多个接口请求函数的模块
函数的返回值是promsie对象
*/
import ajax from './ajax'

const BASE = '/api'
const BASE2 = '/baidu'

/* 
1、 根据经纬度获取位置详情
*/
export const reqAddress = (longitude, latitude) => ajax({
  method: 'GET', // 可以不写
  url: BASE + `/position/${latitude},${longitude}`
})

/* 
2. 获取食品分类列表
*/
export const reqCategorys = () => ajax.get(BASE + '/index_category')

/* 
3. 根据经纬度获取商铺列表
*/
export const reqShops = ({ latitude, longitude }) => ajax({
  url: BASE + '/shops',
  params: {
    latitude,
    longitude
  }
})

/* 
4. 发送短信验证码
*/
export const reqSendCode = (phone) => ajax.get(BASE + '/sendcode', {
  params: {
    phone
  }
})

export const reqBaiDuXxx = () => ajax(BASE2 + '/xxx')