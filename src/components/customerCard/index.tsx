import { Col, Flex, Row } from 'antd';

const CustomerCard = () => {
  return (
    <Col
      flex={8}
      className="border rounded-md shadow-md bg-white  py-4 px-4 w-[30%] "
    >
      <Row justify="start" className="mb-6">
        <span className="font-medium">Customer Details</span>
      </Row>
      <Flex justify="center" className="flex-col gap-6 ">
        <Row>
          <Col span={8}>Customer</Col>
          <Col span={12}>: R963270</Col>
        </Row>
        <Row>
          <Col span={8}></Col>
          <Col span={12}>:Basso, Jim </Col>
        </Row>
        <Row>
          <Col span={8}>Contact Number</Col>
          <Col span={12}>: 12345678901</Col>
        </Row>
        <Row>
          <Col span={8}>Contact Email</Col>
          <Col span={12}>: 09/05/2028 Tue 10:42:58 </Col>
        </Row>
        <Row>
          <Col span={8}>Payment Term</Col>
          <Col span={12}>: Open</Col>
        </Row>
        <Row>
          <Col span={8}>Price List</Col>
          <Col span={12}>: </Col>
        </Row>
      </Flex>
      <Row className="flex justify-end">
        <a>Edit</a>
      </Row>
    </Col>
  );
};

export default CustomerCard;
