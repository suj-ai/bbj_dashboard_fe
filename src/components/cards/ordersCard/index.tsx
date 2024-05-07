import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const OrdersCard = () => {
  return (
    <Card >
      <Col className="flex-col flex w-full h-[372px] gap-2">
        <span className="font-medium">Order Details</span>
        <Col className='flex flex-col justify-between h-full'>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Order </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: R973270</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Order Date </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: 09/05/2023 Tue 10:42:57 AM CST </span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Transaction Type </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: Rental </span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Order Type </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: Quote</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Order Status </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: Open</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> P.O </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: 400053</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7} >
              <span className="text-xs"> Sample Order </span>
            </Col>
            <Col span={16} >
              <span className="text-xs">: R963260</span>
            </Col>
          </Row>
          <Row justify='end'>   <Link to="/">Edit</Link>
          </Row>
        </Col>
      </Col>
    </Card>
  );
};

export default OrdersCard;
