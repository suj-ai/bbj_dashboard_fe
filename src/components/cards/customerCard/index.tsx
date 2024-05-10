import { Row, Col, Flex, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import CardComponent from '../card';
import ShipAndBillCard from '../shipAndBillCard';

const CustomersCard = () => {
  return (
    <CardComponent>
      <Col className="flex-col flex w-full h-[372px] gap-2">
        <span className="font-medium">Customer Details</span>
        <Col className="flex flex-col justify-between h-full">
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Customer </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: R963270</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Customer Name </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: Basso, Jim</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Order Contact </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: Jim Basso </span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Contact Number </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: 9876543210</span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Contact Email </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: abc@gmail.com </span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Payment Term </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: Quote </span>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col span={7}>
              <span className="text-xs"> Price List </span>
            </Col>
            <Col span={16}>
              <span className="text-xs">: 10000000 </span>
            </Col>
          </Row>
          <Row justify="end">
            <Link to="/">Edit</Link>
          </Row>
        </Col>
      </Col>
    </CardComponent>
  );
};
export const CustomerDetailsCard = () => {
  return <CardComponent>
    <Col className="flex-col flex w-full gap-2">
      <Col className='flex justify-between'>
        <span className="font-medium">Pick Up At</span>
        <Checkbox>Same as Bill To</Checkbox>
      </Col>
      <ShipAndBillCard />
    </Col>
  </CardComponent>
};
export default CustomersCard;
