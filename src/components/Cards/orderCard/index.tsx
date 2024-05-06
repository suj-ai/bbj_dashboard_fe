import { Col, Flex, Row } from 'antd';
import { Link } from 'react-router-dom';

const OrdersCard = () => {
  return (
    <Col className="border-[#2A7DBC] border-solid border-opacity-5 rounded-md bg-white py-4 px-4 min-h-full flex flex-col justify-between min-w-min w-[30%]">
      <Row>
        <span className="font-medium">Order Details</span>
      </Row>
      <Flex className="flex-col justify-between h-[85%]">
        <Row>
          <Col span={6}>Order</Col>
          <Col span={12}>: R963270</Col>
        </Row>
        <Row>
          <Col span={6}>Original Order</Col>
          <Col span={12}>: </Col>
        </Row>
        <Row>
          <Col span={6}>Order Date</Col>
          <Col span={16}>: 09/05/2026 Tue 10:42:56 AM CST</Col>
        </Row>
        <Row>
          <Col span={6}>Transaction Type</Col>
          <Col span={12}>: Rental</Col>
        </Row>
        <Row>
          <Col span={6}>Order Type</Col>
          <Col span={12}>: Quote</Col>
        </Row>
        <Row>
          <Col span={6}>Order Status</Col>
          <Col span={12}>: Open</Col>
        </Row>
        <Row>
          <Col span={6}>P.O</Col>
          <Col span={12}>: </Col>
        </Row>
        <Row className="">
          <Col span={6}>Sample Order</Col>
          <Col span={12}>: </Col>
          <Link to="" className="">
            Edit
          </Link>
        </Row>
      </Flex>
    </Col>
  );
};

export default OrdersCard;
