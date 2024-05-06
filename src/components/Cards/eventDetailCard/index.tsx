import { Checkbox, Col, DatePicker, Flex, Row, Select } from 'antd';

const EventDetailCard = () => {
  return (
    <Col className="bg-white p-6 flex flex-col justify-between w-screen ">
      <Row className="w-full">
        <span className="font-medium">Event Details</span>
      </Row>
      <Flex>
        <Row className="gap-4 ">
          <Row className="flex flex-row gap-[68px]">
            <Row className="flex flex-row items-center justify-between min-w-[384px]">
              <Col> Event Category:</Col>
              <Col>
                <Select
                  defaultValue="order"
                  className="min-w-[250px] min-h-[48px]"
                  //   onChange={handleChange}
                  options={[
                    { value: 'order', label: 'Order' },
                    { value: 'anywhere', label: 'Anywhere' },
                    { value: 'customer', label: 'Customer' },
                  ]}
                />
              </Col>
            </Row>
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Event Type:</Col>
              <Col>
                <Select
                  defaultValue="order"
                  className="min-w-[250px] min-h-[48px]"
                  //   onChange={handleChange}
                  options={[
                    { value: 'order', label: 'Order' },
                    { value: 'anywhere', label: 'Anywhere' },
                    { value: 'customer', label: 'Customer' },
                  ]}
                />
              </Col>
            </Row>
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Event Venue:</Col>
              <Col>
                <Select
                  defaultValue="order"
                  className="min-w-[250px] min-h-[48px]"
                  //   onChange={handleChange}
                  options={[
                    { value: 'order', label: 'Order' },
                    { value: 'anywhere', label: 'Anywhere' },
                    { value: 'customer', label: 'Customer' },
                  ]}
                />
              </Col>
            </Row>
          </Row>
          <Row className="flex flex-row gap-[68px]">
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Event Name:</Col>
              <Col>
                <Select
                  defaultValue="order"
                  className="min-w-[250px] min-h-[48px]"
                  //   onChange={handleChange}
                  options={[
                    { value: 'order', label: 'Order' },
                    { value: 'anywhere', label: 'Anywhere' },
                    { value: 'customer', label: 'Customer' },
                  ]}
                />
              </Col>
            </Row>
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Event Date:</Col>
              <Col>
                <DatePicker
                  picker="week"
                  className="min-w-[250px] min-h-[48px]"
                />
              </Col>
            </Row>
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Delivery Date:</Col>
              <Col>
                <DatePicker
                  picker="week"
                  className="min-w-[250px] min-h-[48px]"
                />
              </Col>
            </Row>
          </Row>
          <Row className="flex flex-row gap-[68px]">
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Pickup Date :</Col>
              <Col>
                <DatePicker
                  picker="week"
                  className="min-w-[250px] min-h-[48px]"
                />
              </Col>
            </Row>
            <Row className="flex flex-row items-center justify-between  min-w-[384px]">
              <Col> Deadline Date:</Col>
              <Col>
                <DatePicker
                  picker="week"
                  className="min-w-[250px] min-h-[48px]"
                />
              </Col>
            </Row>
          </Row>
        </Row>
      </Flex>
      <Row>
        <Checkbox>Recurring?</Checkbox>
      </Row>
    </Col>
  );
};

export default EventDetailCard;
