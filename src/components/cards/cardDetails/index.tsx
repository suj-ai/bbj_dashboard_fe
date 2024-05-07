import { Col, Row } from 'antd';
import { CARD_DETAILS_CONSTANTS } from '../../../constants/cardConstants';

const CardDetails = () => {
  return (
    <Row className="flex flex-row p-2 " gutter={[10, 10]}>
      {CARD_DETAILS_CONSTANTS.map((item) => {
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
    </Row>
  );
};

export default CardDetails;
