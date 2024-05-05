import { Col, Flex, Row } from "antd";
import { Link } from "react-router-dom";

const OrdersCard = () => {
  return (
    <Col
      flex={8}
      className="border rounded-md shadow-md bg-white py-4 px-4 w-[30%] h-full "
    >
      <Row justify="start" className="mb-6">
        <span className="font-medium">Order Details</span>
      </Row>
      <Flex
        justify="center"
        className="flex-col justify-between h-[85%] gap-[8px]"
      >
        <Row>
          <Col span={8}>Order</Col>
          <Col span={12}>: R963270</Col>
        </Row>
        <Row>
          <Col span={8}>Original Order</Col>
          <Col span={12}>: </Col>
        </Row>
        <Row>
          <Col span={8}>Order Date</Col>
          <Col span={16}>: 09/05/2028 Tue 10:42:58 AM CST</Col>
        </Row>
        <Row>
          <Col span={8}>Transaction Type</Col>
          <Col span={12}>: Rental</Col>
        </Row>
        <Row>
          <Col span={8}>Order Type</Col>
          <Col span={12}>: Quote</Col>
        </Row>
        <Row>
          <Col span={8}>Order Status</Col>
          <Col span={12}>: Open</Col>
        </Row>
        <Row>
          <Col span={8}>P.O</Col>
          <Col span={12}>: </Col>
        </Row>
        <Row className="flex">
          <Col span={8}>Sample Order</Col>
          <Col span={12}>: </Col>
        </Row>
        <Row className=" flex justify-end">
          <a>Edit</a>
        </Row>
      </Flex>
    </Col>
  );
};

export default OrdersCard;
