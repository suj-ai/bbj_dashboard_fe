import { Col, Row } from 'antd';
import { CARD_DETAILS_CONSTANTS } from '../../../constants/cardConstants';

const CardDetails = () => {
  return (
    <Row className="flex flex-row justify-evenly  h-screen " gutter={[10, 10]}>
      {CARD_DETAILS_CONSTANTS.map((item) => {
        return (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
            className=""
          >
            {item.value}
          </Col>
        );
      })}
      <Row className="mb-32"></Row>
    </Row>
  );
};

export default CardDetails;
