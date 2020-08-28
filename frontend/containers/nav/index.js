import { Row, Col } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

const Nav = () => {
    const handleReload = e => window.location.reload()

    return (
        <div className='nav-box'>
            <Row>     
                <Col span={2}>
                    <div className='img-box'>
                        <img src='../../static/img/vs.png' alt=''/>
                    </div>
                </Col>
                <Col span={6}>
                    <span className='nav-title'>JD Accurate Search</span>
                </Col>
                <Col span={15}></Col>
                <Col className='reload-col' span={1}>
                    <ReloadOutlined onClick={handleReload} />
                </Col> 
            </Row>
        </div>
    )
}

export default Nav