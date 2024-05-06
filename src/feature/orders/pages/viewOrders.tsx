import { useState } from "react";
import { Col, Flex, Row } from "antd";
import OrdersCard from "../../../components/orderCard";
import CustomerCard from "../../../components/customerCard";
import BillingCard from "../../../components/billingCard";
import EventDetailCard from "../../../components/eventDetailCard";
import {
  orderTableHeader,
  orderTableHeaderConstants,
} from "../../../constants/ordersTableConstants";
import OrderFooterComponent from "../../../components/orderFooterCard";
const ViewOrders = () => {
  const [selected] = useState("General");
  return (
    <>
      <Col className="bg-white w-full h-full flex flex-col gap-6">
        {/* First Row */}
        <Row className="flex gap-6 h-[40%] p-4">
          <OrdersCard />
          <CustomerCard />
          <BillingCard />
        </Row>
        {/* Second Row */}
        <Row className="h-[30%] p-4">
          <EventDetailCard />
        </Row>
        {/* Third Row */}
        <Row className="h-[40%] overflow-auto">
          <Col className="w-full h-[52px] bg-primary flex">
            {orderTableHeaderConstants?.map((value: orderTableHeader) => (
              <span
                className={`flex py-[24px] px-[10px] w-[130px] items-center justify-center text-[16px] text-white ${
                  selected === value?.item ? "bg-[#002B4C]" : null
                }`}
              >
                {value?.item}
                {value?.item === "Notes" ? (
                  <div className="w-[6px] h-[6px] rounded-[1000px] bg-yellow-100"></div>
                ) : (
                  <span className="text-yellow-100">{value?.value}</span>
                )}
              </span>
            ))}
          </Col>
          <Col className="flex w-full gap-6 p-4">
            <Col
              flex={8}
              className="border rounded-md shadow-md bg-white py-4 px-4 w-[30%] h-full "
            >
              <Row justify="start" className="mb-6">
                <span className="font-medium">Pickup Details</span>
              </Row>
              <Flex
                justify="center"
                className="flex-col justify-between h-[50%] gap-[8px]"
              >
                <Row>
                  <Col span={8}>Name</Col>
                  <Col span={12}>: Basso, Jim</Col>
                </Row>
                <Row>
                  <Col span={8}>Address</Col>
                  <Col span={12}>
                    :5429 N. Melvina Ave, Chicago, IL, United States, 60714 -
                    3400{" "}
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>Phone</Col>
                  <Col span={16}>: 847-933-5244</Col>
                </Row>
                <Row>
                  <Col span={8}>Comment</Col>
                  <Col span={16}>:</Col>
                </Row>
                <Row className=" flex justify-end">
                  <a>Edit</a>
                </Row>
              </Flex>
            </Col>
            <Col
              flex={8}
              className="border rounded-md shadow-md bg-white py-4 px-4 w-[30%] h-full "
            >
              <Row justify="start" className="mb-6">
                <span className="font-medium">Pickup Details</span>
              </Row>
              <Flex
                justify="center"
                className="flex-col justify-between h-[50%] gap-[8px]"
              >
                <Row>
                  <Col span={8}>Name</Col>
                  <Col span={12}>: Basso, Jim</Col>
                </Row>
                <Row>
                  <Col span={8}>Address</Col>
                  <Col span={12}>
                    :5429 N. Melvina Ave, Chicago, IL, United States, 60714 -
                    3400{" "}
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>Phone</Col>
                  <Col span={16}>: 847-933-5244</Col>
                </Row>
                <Row>
                  <Col span={8}>Comment</Col>
                  <Col span={16}>:</Col>
                </Row>
                <Row className=" flex justify-end">
                  <a>Edit</a>
                </Row>
              </Flex>
            </Col>
            <Col
              flex={8}
              className="border rounded-md shadow-md bg-white py-4 px-4 w-[30%] h-full "
            >
              <Row justify="start" className="mb-6">
                <span className="font-medium">Pickup Details</span>
              </Row>
              <Flex
                justify="center"
                className="flex-col justify-between h-[50%] gap-[8px]"
              >
                <Row>
                  <Col span={8}>Name</Col>
                  <Col span={12}>: Basso, Jim</Col>
                </Row>
                <Row>
                  <Col span={8}>Address</Col>
                  <Col span={12}>
                    :5429 N. Melvina Ave, Chicago, IL, United States, 60714 -
                    3400{" "}
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>Phone</Col>
                  <Col span={16}>: 847-933-5244</Col>
                </Row>
                <Row>
                  <Col span={8}>Comment</Col>
                  <Col span={16}>:</Col>
                </Row>
                <Row className=" flex justify-end">
                  <a>Edit</a>
                </Row>
              </Flex>
            </Col>
          </Col>
        </Row>
        <Row className="w-[99%] h-[30%]">
          <OrderFooterComponent />
        </Row>
      </Col>
    </>
  );
};

export default ViewOrders;
