import { Col } from 'antd';
import CardDetails from '../../../../components/cards/cardDetails';
import EventDetailCard from '../../../../components/cards/eventDetailCard';
import ViewOrderFooter from '../../../../components/layoutViewOrderFooter';
import ViewOrderNavigation from '../../../../components/layoutViewOrderNavigation';

const NewViewOrders = () => {
  return (
    <Col className="h-[200vh] bg-white w-screen overflow-y-scroll ">
      <CardDetails />
      <EventDetailCard />
      <ViewOrderFooter />
      <ViewOrderNavigation />
    </Col>
  );
};

export default NewViewOrders;
