import { PureComponent } from 'react'
import { Input } from 'antd'
import { Row, Col } from 'antd'

const Search = Input.Search

export default class Container extends PureComponent {
    render() {
        const { handleSearch } = this.props

        return (
            <div className='search-box'>
                <Row>
                    <Col span={18}></Col>
                    <Col span={4}>
                        <Search enterButton 
                            placeholder='请输入筛选词'
                            onSearch={val => handleSearch(val)} />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}