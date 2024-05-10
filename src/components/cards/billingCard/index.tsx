import { Card, Row, Col, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import CardComponent from '../card';
import ShipAndBillCard from '../shipAndBillCard';

const BillingsCard = () => {
  return (
    <CardComponent>
      <Col className="flex-col flex w-full h-[372px] gap-2">
        <span className="font-medium">Billing Details </span>
        <Col className="flex flex-col justify-between timepass h-[100%]">
          <Col className="flex flex-col gap-5 h-[100%]">
            <Row className="justify-between">
              <Col span={7}>
                <span className="text-xs"> Customer </span>
              </Col>
              <Col span={14}>
                <span className="text-xs">: R963270</span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7}>
                <span className="text-xs"> Name </span>
              </Col>
              <Col span={14}>
                <span className="text-xs">: Basso, Jim</span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7}>
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14}>
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7}>
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14}>
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7}>
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14}>
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
          </Col>
          <Row className="justify-between">
            <Col
              span={24}
              className="flex flex-row items-center justify-between"
            >
              <Checkbox style={{ fontSize: 12 }}>Signed</Checkbox>
              <Checkbox style={{ fontSize: 12 }}>Commissionable</Checkbox>
              <Checkbox style={{ fontSize: 12 }}>Has Fabrication </Checkbox>
              <Link to="">Edit</Link>
            </Col>
          </Row>
        </Col>
      </Col>
    </CardComponent>
  );
};

export const BillingsDetailsCard = () => {
  return <CardComponent>
    <Col className="flex-col flex w-full  gap-2">
      <Col className='flex justify-between'>
        <span className="font-medium">Ship To</span>
        <Checkbox>Same as Bill To</Checkbox>
        <Checkbox>Same as Bill To</Checkbox>
      </Col>
      <ShipAndBillCard />
    </Col>
  </CardComponent>
};

export default BillingsCard;
