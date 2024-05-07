import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const CustomersCard = () => {
  return (
    <Card className='min-h-[372px]'>
      <Col className="flex-col flex gap-2">
        <Row className="">
          <span className="font-medium">Customer Details</span>
        </Row>
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
            <span className="text-xs"> Contact Number </span>
          </Col>
          <Col span={14} className="justify-between">
            <span className="text-xs">: 9776543210 </span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={7} className="justify-between">
            <span className="text-xs"> Contact Email </span>
          </Col>
          <Col span={14} className="justify-between">
            <span className="text-xs">: google@gmail.com </span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={7} className="justify-between">
            <span className="text-xs"> Payment Term </span>
          </Col>
          <Col span={14} className="justify-between">
            <span className="text-xs">: Open</span>
          </Col>
        </Row>
        <Row className="justify-between">
          <Col span={7} className="justify-between">
            <span className="text-xs"> Price List </span>
          </Col>
          <Col span={14} className="justify-between">
            <span className="text-xs">: 1000000 </span>
          </Col>
        </Row>
        <Col span={24} className=" flex justify-end">
          <Link to="/">Edit</Link>
        </Col>
      </Col>
    </Card>
  );
};

export default CustomersCard;
