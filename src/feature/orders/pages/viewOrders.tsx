import { Col, Row } from 'antd';
import OrdersCard from '../../../components/Cards/orderCard/index.tsx';
import CustomerCard from '../../../components/Cards/customerCard/index.tsx';
import BillingCard from '../../../components/Cards/billingCard/index.tsx';

const ViewOrders = () => {
  return (
    <>
      <Col className=" relative bg-white w-screen h-full rounded-md p-4 flex flex-col gap-10">
        {/* First Row */}
        <Row className="flex gap-6 h-[30%] w-full">
          <OrdersCard />
          <CustomerCard />
          <BillingCard />
        </Row>
        {/* Second Row */}
        {/* <Row className="h-[20%]">
          <EventDetailCard />
        </Row> */}

        {/* Third Row */}
        {/* <Row className="flex flex-row h-[30%]">
          <ViewOrderNavigation />
        </Row> */}
        {/* Fouth Row */}
        {/* <Row className=" h-[30%] justify-between gap-6">
          <CustomerDetailsCard />
          <CustomerDetailsCard />
          <CustomerDetailsCard />
        </Row> */}
      </Col>
      {/* <Row className="bg-white min-h-24 min-w-full fixed bottom-0">
        <ViewOrderFooter />
      </Row> */}
    </>
  );
};

export default ViewOrders;
