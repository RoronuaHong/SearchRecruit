import axios from 'axios'

import * as config from './config'
import msg from './msg'

/**
 * @param  {Error}
 * @return {[type]}
 */
const catchError = (error) => {
	msg.close()
	if(error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data) 
    console.log(error.response.status) 
    console.log(error.response.headers) 
    msg.info('服务器响应错误')
  } else if(error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request) 
    msg.info('网络请求错误')
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message) 
    msg.info('网络请求过程发生错误')
  }
  console.log(error.config) 
}

/**
 * 检测用户Token是否有效
 * @param  {Object} data 服务端返回数据
 */
const checkInvalidToken = (data) => {
	// if(data.code ==='E100000' && data.msg === 'Error Token') {
	// 	const cookieParam = {expires: -1, path: '/', domain: config.COOKIE_RECRUIT_DOMAIN}
	// 	cookie.remove(config.COOKIE_RECRUIT_TOKEN, cookieParam)
	// 	cookie.remove(config.COOKIE_RECRUIT_USER_NAME, cookieParam)
	// 	cookie.remove(config.COOKIE_RECRUIT_USER, cookieParam)
	// 	const currUrl = encodeURIComponent(window.location.href) 
	// 	window.location.href = '/login.html?c=' + currUrl
	// 	return
	// }
}

export default {
    get(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params: data })
                .then(result => {
                    if(result.data) {
                        if(!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data))
                .then(result => {
                    if (result.data) {
                        if (!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    postFormData(url, data, config) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' }, ...config })
                .then(result => {
                    if (result.data) {
                        if (!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    delete(url, data) {
        return new Promise((resolve, reject) => {
            axios.delete(url, { params: data })
                .then(result => {
                    if (result.data) {
                        if (!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    put(url, data) {
        return new Promise((resolve, reject) => {
            axios.put(url, qs.stringify(data))
                .then(result => {
                    if (result.data) {
                        if (!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    ajax(option) {
        return new Promise((resolve, reject) => {
            axios(option)
                .then(result => {
                    if (result.data) {
                        if (!result.data.success) {
                            checkInvalidToken(result.data.data)
                        }

                        resolve(result.data)
                    } else {
                        reject(result.data || result)
                    }
                })
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    },

    all(...args) {
        return new Promise((resolve, reject) => {
            axios.all([...args])
                .then(axios.spread((...params) => {
                    resolve(params)
                }))
                .catch(error => {
                    catchError(error)
                    // reject(error)
                })
        })
    }
}