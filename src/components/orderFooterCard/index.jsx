import React from "react";
import { Button, Col } from "antd";
import { IoCopyOutline, IoPrintOutline, IoSaveOutline } from "react-icons/io5";

const OrderFooterComponent = () => {
  return (
    <Col className="bg-white w-full h-[75px] p-[25px] shadow-md flex items-center justify-center gap-4">
      <Col className="mr-[50px] flex gap-4">
        <Button type="default">Close</Button>
        <Button type="primary" icon={<IoSaveOutline />}>
          Save
        </Button>
      </Col>
      <Col className="flex gap-4">
        <Button type="primary" icon={<IoPrintOutline />}>
          Print
        </Button>
        <Button type="primary" icon={<IoCopyOutline />}>
          Copy
        </Button>
        <Button type="primary" className="bg-[#F23C3C]">
          Cancle Order
        </Button>
      </Col>
    </Col>
  );
};

export default OrderFooterComponent;
