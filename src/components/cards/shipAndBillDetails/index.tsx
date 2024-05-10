import { Col, Row } from 'antd';
import { SHIP_AND_BILL_DETAILS_CONSTANTS } from '../../../constants/shipAndBillConstants';

const ShipAndBillDetails = () => {

  return (
    <Row className="flex p-2  " gutter={[5, 10]}>
      {SHIP_AND_BILL_DETAILS_CONSTANTS.map((item) => (
        <Col
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          className="max-sm:w-24 w-[300px]"
        >
          {item.value}
        </Col>
      )
      )}
    </Row>
  );
};

export default ShipAndBillDetails;
