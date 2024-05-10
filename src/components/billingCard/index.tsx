import { Col, Flex, Row } from 'antd';
import { Link } from 'react-router-dom';
import BillingCheckBox from '../checkbox';

const BillingCard = () => {
  return (
    <Col
      flex={10}
      className="border rounded-md shadow-md bg-white  py-4 px-4 justify-between w-[30%]"
    >
      <Row justify="start" className="h-[10%]">
        <span className="font-medium">Billing Details</span>
      </Row>
      <Flex className="flex-col h-[80%] gap-6">
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
      <Row className="flex flex-row justify-between h-[5%] flex-nowrap">
        <BillingCheckBox text={'Signed'} />
        <BillingCheckBox text={'Commissionable'} />
        <BillingCheckBox text={'Has Fabrication'} />
        <Link to="" className="">
          Edit
        </Link>
      </Row>
    </Col>
  );
};



export default BillingCard;
