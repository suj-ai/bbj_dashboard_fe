import { Button, Card, Col, Flex, Row } from 'antd';
import { Link } from 'react-router-dom';

const OrdersCard = () => {
  return (
    <Card>
      <Col className="flex-col flex gap-2">
        <Row justify="start" className="">
          <span className="font-medium">Order Details</span>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Order </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: R963270</span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Order Date </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: 09/05/2023 Tue 10:42:56 AM CST </span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Transaction Type </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: Rental </span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Order Type </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: Quote</span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Order Status </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: Open</span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> P.O </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: 400053</span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={8} className="justify-between">
            <span className="text-xs"> Sample Order </span>
          </Col>
          <Col span={12} className="justify-between">
            <span className="text-xs">: R963270</span>
          </Col>
        </Row>
        <Col span={24} className=" flex justify-end">
          <Link to="/">Edit</Link>
        </Col>
      </Col>
    </Card>
  );
};

export default OrdersCard;
