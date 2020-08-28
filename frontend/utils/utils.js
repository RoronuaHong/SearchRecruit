export default {
    makeHtml: content => {
        return { __html: content }
    },
    makeHighLight: (content, keywords) => {
        const reg = new RegExp(keywords, 'ig')
        
        const contents = content.replace(reg, (...res) => (
            `<span class='high-light-span'>${res[0]}</span>`
        ))

        return { __html: contents }
    }
}