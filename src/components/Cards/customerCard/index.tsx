import { Col, Flex, Row } from 'antd';
import { Link } from 'react-router-dom';

const CustomerCard = () => {
  return (
    <Col className="border-[#2A7DBC] border-solid border-opacity-5 rounded-md bg-white py-4 px-4 min-h-full flex flex-col gap-10 w-[30%]">
      <Row>
        <span className="font-medium">Customer Details</span>
      </Row>
      <Flex className="flex flex-col justify-between h-[85%] ">
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
      <Row className="flex justify-end ">
        <Link to="">Edit</Link>
      </Row>
    </Col>
  );
};

const CustomerDetailsCard = () => {
  return (
    <Col
      className="border-[#2A7DBC] border-solid border-opacity-5 rounded-md p-6 min-h-full flex flex-col gap-10
    flex-1 min-w-min "
    >
      {/* <Row>
        <span className="font-medium">Customer Details</span>
      </Row> */}
      <Flex className="flex flex-col justify-between h-full ">
        <Row>
          <Col span={8}>Name</Col>
          <Col span={12}>: CUSTOMER_DETAIL_CARD_CONSTANTS</Col>
        </Row>
        <Row>
          <Col span={8}>Address</Col>
          <Col span={12}>
            :5429 N. Melvina Ave, Chicago, IL, United States, 60714 - 3400{' '}
          </Col>
        </Row>
        <Row>
          <Col span={8}>Phone</Col>
          <Col span={12}>: 847-933-5244</Col>
        </Row>
        <Row>
          <Col span={8}>Comment</Col>
          <Col span={12}>: Hello World </Col>
        </Row>
        <Row className="flex justify-end ">
          <Link to="">Edit</Link>
        </Row>
      </Flex>
    </Col>
  );
};

export { CustomerDetailsCard };

export default CustomerCard;
