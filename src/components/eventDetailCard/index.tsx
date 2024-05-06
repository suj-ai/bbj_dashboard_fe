import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import { FiCalendar } from "react-icons/fi";
import BillingCheckBox from "../checkbox";

const EventDetailCard = () => {
  return (
    <Form>
      <Row justify="start" className="mb-3">
        <span className="font-semibold text-base">Event Details</span>
      </Row>
      <Row className="flex gap-10">
        <Col>
          <Row className="flex items-center">
            <span className="text-[14px]">Event Category</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <Select
              defaultValue="Unknown"
              style={{
                width: 250,
                height: 48,
              }}
              //   onChange={handleChange}
              options={[
                { value: "Unknown", label: "Unknown" },
                { value: "anywhere", label: "Anywhere" },
                { value: "customer", label: "Customer" },
                { value: "bill_to", label: "Bill to" },
                { value: "ship_to", label: "Ship to" },
                { value: "event", label: "Event" },
              ]}
            />
          </Row>
          <Row className="flex items-center mt-[15px] justify-end">
            <span className="text-[14px]">Event Name</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <Input
              placeholder="Search"
              style={{ width: 250, height: 48 }}
              value={"FFB Update 2"}
            />
          </Row>
          <Row className="flex items-center mt-[15px] justify-end">
            <span className="text-[14px]">Pickup Date</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <DatePicker
              style={{ width: 250, height: 48 }}
              suffixIcon={<FiCalendar />}
            />
          </Row>
        </Col>
        <Col>
          <Row className="flex items-center justify-end">
            <span className="text-[14px]">Event Type</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <Select
              defaultValue="Unknown"
              style={{ width: 250, height: 48 }}
              //   onChange={handleChange}
              options={[
                { value: "Unknown", label: "Unknown" },
                { value: "anywhere", label: "Anywhere" },
                { value: "customer", label: "Customer" },
                { value: "bill_to", label: "Bill to" },
                { value: "ship_to", label: "Ship to" },
                { value: "event", label: "Event" },
              ]}
            />
          </Row>
          <Row className="flex items-center mt-[15px] justify-end">
            <span className="text-[14px]">Event Date</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <DatePicker
              style={{ width: 250, height: 48 }}
              suffixIcon={<FiCalendar />}
            />
          </Row>
          <Row className="flex items-center mt-[15px] justify-end">
            <span className="text-[14px]">Deadline Date</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <Input
              placeholder="Search"
              style={{ width: 250, height: 48 }}
              value={"09/05/2023 Tue 12:00:12 CST "}
            />
          </Row>
        </Col>
        <Col>
          <Row className="flex items-center justify-end">
            <span className="text-[14px]">Event Venue</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <Select
              defaultValue="Unknown"
              style={{ width: 250, height: 48, borderColor: "#2A7DBC" }}
              //   onChange={handleChange}
              options={[
                { value: "Unknown", label: "Unknown" },
                { value: "anywhere", label: "Anywhere" },
                { value: "customer", label: "Customer" },
                { value: "bill_to", label: "Bill to" },
                { value: "ship_to", label: "Ship to" },
                { value: "event", label: "Event" },
              ]}
            />
          </Row>
          <Row className="flex items-center mt-[15px] justify-end">
            <span className="text-[14px]">Delivery Date</span>
            <span className="text-[14px] ml-[5px] mr-[5px]">:</span>
            <DatePicker
              style={{ width: 250, height: 48 }}
              suffixIcon={<FiCalendar />}
            />
          </Row>
        </Col>
      </Row>
      <Row className="mt-[10px]">
        <BillingCheckBox text={"Recurring?"} />
      </Row>
    </Form>
  );
};

export default EventDetailCard;
