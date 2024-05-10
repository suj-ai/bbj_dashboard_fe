import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

const ShipAndBillCard = () => {
    return (
        <Col className="flex flex-col justify-between ">
            <Col className="flex flex-col justify-between gap-2">
                <Row className="justify-between">
                    <Col span={7}>
                        <span className="text-sm"> Name </span>
                    </Col>
                    <Col span={16}>
                        <span className="text-sm">: Basso, Jim </span>
                    </Col>
                </Row>
                <Row className="justify-between">
                    <Col span={7}>
                        <span className="text-sm"> Address </span>
                    </Col>
                    <Col span={16}>
                        <span className="text-sm">: 5429 N. Melvina Ave, Chicago, IL, United States, 60714 - 3400 </span>
                    </Col>
                </Row>
                <Row className="justify-between">
                    <Col span={7}>
                        <span className="text-sm"> Phone </span>
                    </Col>
                    <Col span={16}>
                        <span className="text-sm">: 847-933-5244 </span>
                    </Col>
                </Row>
                <Row className="justify-between">
                    <Col span={7}>
                        <span className="text-sm"> Comment </span>
                    </Col>
                    <Col span={16}>
                        <span className="text-sm">: yolo </span>
                    </Col>

                </Row>
                <Row justify="end">
                    <Link to="/">Edit</Link>
                </Row>
            </Col>
        </Col>
    )
}

export default ShipAndBillCard