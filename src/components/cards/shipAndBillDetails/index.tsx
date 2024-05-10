import { Col, Row } from 'antd';
import { SHIP_AND_BILL_DETAILS_CONSTANTS } from '../../../constants/shipAndBillConstants';

const ShipAndBillDetails = () => {
  <Row className="flex flex-row p-2 " gutter={[10, 10]}>
    {SHIP_AND_BILL_DETAILS_CONSTANTS.map((item) => {
      return (
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          className=""
        >
          {item.value}
        </Col>
      );
    })}
  </Row>;
};

export default ShipAndBillDetails;
