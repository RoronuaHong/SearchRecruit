let recruitApi

if(window.location.host.match(/^(localhost(:[\d]+)?|t.jobsearch.com)$/)) {
    recruitApi = 'http://localhost:7713'
} else {
    recruitApi = 'https://www.jobsearch.com:7713'
}

export const RECRUIT_API = recruitApi

// BOSS直聘接口
export const BOSS_API = '/boss'

// BOSS直聘完整API
export const API_COMPLETE_BOSS = RECRUIT_API + BOSS_API