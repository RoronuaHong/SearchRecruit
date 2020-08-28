import { PureComponent } from 'react'
import { Row, Col, Layout } from 'antd'

import { utils } from '../../utils'
// import { rowList, color } from '../../constants/list'

const { Content } = Layout

const renderList = (list, keywords) => list.map((item, i) => {
    // const rowLists = rowList.map(m => {
    //     switch(m.match) {
    //         case 'releaseTime': 
    //             m.detail = item.detail.releaseTime
    //             break
    //         case 'companyName': 
    //             m.detail = item.detail.companyName
    //             break
    //         case 'typeOfBusiness': 
    //             m.detail = item.detail.typeOfBusiness
    //             break
    //         case 'numberOfPeople': 
    //             m.detail = item.detail.numberOfPeople
    //             break
    //         case 'address': 
    //             m.detail = item.detail.address
    //             break
    //         case 'jobName': 
    //             m.detail = item.job.jobName
    //             m.url = item.url
    //             break
    //         case 'jobRequirement': 
    //             m.detail = item.job.jobRequirement
    //             break
    //         case 'jobDetail': 
    //             m.detail = item.job.jobDetail
    //             break
    //     }

    //     return m
    // })

    // const renderRowList = rowLists.map(l => (
    //     <Row type='flex' key={l.id}>
    //         <Col span={3} className='name'>
    //             {l.name} :
    //         </Col>
    //         <Col span={21} className='detail' style={{ background: color[l.id] }}>
    //             {l.id === 0 ?
    //                 <a className='job-url' target='_blank' href={l.url}>{l.detail}</a> : 
    //                 l.id !== 7 ? l.detail : <div dangerouslySetInnerHTML={utils.makeHighLight(l.detail, keywords)}></div>
    //             }
    //         </Col>
    //     </Row> 
    // ))

    // return <li key={item.url}>{renderRowList}</li>
    return <li></li>
})

export default class List extends PureComponent {
    render() {
        const { list, keywords } = this.props
        const renderLists = renderList(list, keywords)

        return (
            <Content>
                <div className='list-box'>
                    {renderLists.length <= 0 ? 
                        <div className='empty-box'>
                            <div className='title'></div>
                            <div className='content'>请输入筛选词进行搜索, 多个筛选词用空格(" ")或竖线("|")隔开</div>
                        </div> : 
                        <ul className='list-detail'>{renderLists}</ul>
                    }
                </div>
            </Content>
        )
    }
}