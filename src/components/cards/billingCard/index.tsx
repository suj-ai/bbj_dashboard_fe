import { Card, Row, Col, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import CardComponent from '../card';

const BillingsCard = () => {
  return (
    <CardComponent >
      <Col className="flex-col">
        <Row className="">
          <span className="font-medium">Billing Details</span>
        </Row>
        <Col className='flex flex-col h-[32vh] justify-between timepass' >

          <Col className='flex flex-col gap-2 '>
            <Row className="justify-between">
              <Col span={7} className="justify-between">
                <span className="text-xs"> Customer </span>
              </Col>
              <Col span={14} className="justify-between">
                <span className="text-xs">: R963270</span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7} className="justify-between">
                <span className="text-xs"> Name </span>
              </Col>
              <Col span={14} className="justify-between">
                <span className="text-xs">: Basso, Jim</span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7} className="justify-between">
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14} className="justify-between">
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7} className="justify-between">
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14} className="justify-between">
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
            <Row className="justify-between">
              <Col span={7} className="justify-between">
                <span className="text-xs"> Order Contact </span>
              </Col>
              <Col span={14} className="justify-between">
                <span className="text-xs">: Basso, Jim </span>
              </Col>
            </Row>
          </Col>
          <Row className="justify-between">
            <Col span={24} className='flex flex-row items-center justify-between'  >
              <Checkbox style={{ fontSize: 12 }}>Signed</Checkbox>
              <Checkbox style={{ fontSize: 12 }}>Commissionable</Checkbox>
              <Checkbox style={{ fontSize: 12 }}>Has Fabrication </Checkbox>
              <Link to=''>Edit</Link>
            </Col>
          </Row>

        </Col>

      </Col>

    </CardComponent>
  );
};

export default BillingsCard;
