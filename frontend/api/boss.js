import { http, config } from '../utils'

const getList = data => {
    const url = config.API_COMPLETE_BOSS + '/list'

    return http.get(url, data)
}

export { getList }