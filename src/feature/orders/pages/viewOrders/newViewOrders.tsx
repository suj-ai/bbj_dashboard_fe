import { Col } from 'antd';
import CardDetails from '../../../../components/cards/cardDetails';

const NewViewOrders = () => {
  return (
    <Col className="h-screen bg-white w-screen overflow-y-scroll">
      <CardDetails />
      <CardDetails />
    </Col>
  );
};

export default NewViewOrders;
