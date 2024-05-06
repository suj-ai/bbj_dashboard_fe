import { Checkbox, Col, Flex, Row } from 'antd';
import { Link } from 'react-router-dom';

const BillingCard = () => {
  return (
    <Col className="border-[#2A7DBC] border-solid border-opacity-5 rounded-md bg-white py-4 px-4 justify-between w-[30%] h-full">
      <Row justify="start" className="h-[10%]">
        <span className="font-medium">Billing Details</span>
      </Row>
      <Flex className="flex-col h-[80%] justify-evenly">
        <Row>
          <Col span={8}>Tax Schedule</Col>
          <Col span={12}>: NONRENT</Col>
        </Row>
        <Row>
          <Col span={8}>Sales Person</Col>
          <Col span={12}>: Skokie House </Col>
        </Row>
        <Row>
          <Col span={8}>Contact Number</Col>
          <Col span={16}>: 847-124-5233</Col>
        </Row>
        <Row>
          <Col span={8}>Taken By</Col>
          <Col span={14}>: 09/05/2028 Tue 10:42:58</Col>
        </Row>
        <Row>
          <Col span={8}>Taken By Name</Col>
          <Col span={12}>: Brian Renolds</Col>
        </Row>
      </Flex>
      <Flex className="flex flex-row gap-[22px]  h-[5%]">
        <Row className="flex gap-3">
          <Checkbox>Signed</Checkbox>
          <Checkbox>Commissionable</Checkbox>
          <Checkbox>Has Fabrication</Checkbox>
        </Row>
        <Link to="">Edit</Link>
      </Flex>
    </Col>
  );
};

export default BillingCard;
