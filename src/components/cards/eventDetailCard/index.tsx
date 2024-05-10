import { Col, DatePicker, Row, Select } from 'antd';

const EventDetailCard = () => {
  return (
    <Col className="flex flex-col p-10">
      <Row className="mb-4 justify-start">
        <span className="font-medium">Event Details</span>
      </Row>
      <Col className="flex flex-col gap-10">
        <Row
          className="flex items-center md:gap-20 xl:gap-10 lg:justify-start  "
          gutter={[0, 10]}
        >
          <Col
            className="flex items-center"
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 11 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Event Category:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 10 }}
            >
              <Select
                defaultValue="order"
                className="min-w-[180px] min-h-[40px]"
                //   onChange={handleChange}
                options={[
                  { value: 'order', label: 'Order' },
                  { value: 'anywhere', label: 'Anywhere' },
                  { value: 'customer', label: 'Customer' },
                ]}
              />
            </Col>
          </Col>
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Event Type:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 10 }}
            >
              <Select
                defaultValue="order"
                className="min-w-[180px] min-h-[40px]"
                //   onChange={handleChange}
                options={[
                  { value: 'order', label: 'Order' },
                  { value: 'anywhere', label: 'Anywhere' },
                  { value: 'customer', label: 'Customer' },
                ]}
              />
            </Col>
          </Col>
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
          >
            <Col xs={{ span: 10 }} md={{ span: 12 }} xl={{ span: 6 }}>
              <span className="text-sm">Event Venue:</span>
            </Col>
            <Col xs={{ span: 14 }} md={{ span: 12 }} xl={{ span: 10 }}>
              <Select
                defaultValue="order"
                className="min-w-[180px] min-h-[40px]"
                //   onChange={handleChange}
                options={[
                  { value: 'order', label: 'Order' },
                  { value: 'anywhere', label: 'Anywhere' },
                  { value: 'customer', label: 'Customer' },
                ]}
              />
            </Col>
          </Col>
        </Row>
        <Row
          className="flex items-center md:gap-20 xl:gap-10 lg:justify-start  "
          gutter={[0, 10]}
        >
          <Col
            className="flex items-center"
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 11 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Event Name:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 10 }}
            >
              <Select
                defaultValue="order"
                className="min-w-[180px] min-h-[40px]"
                //   onChange={handleChange}
                options={[
                  { value: 'order', label: 'Order' },
                  { value: 'anywhere', label: 'Anywhere' },
                  { value: 'customer', label: 'Customer' },
                ]}
              />
            </Col>
          </Col>
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Event Date:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 10 }}
            >
              <DatePicker className="min-w-[180px] min-h-[40px]" />
            </Col>
          </Col>
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 16 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Delivery Date:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 10 }}
            >
              <DatePicker className="min-w-[180px] min-h-[40px]" />
            </Col>
          </Col>
        </Row>
        <Row
          className="flex items-center  md:gap-20 xl:gap-10  "
          gutter={[0, 10]}
        >
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 11 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Pickup Date:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 10 }}
            >
              <DatePicker className="min-w-[180px] min-h-[40px]" />
            </Col>
          </Col>
          <Col
            className="flex items-center "
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 10 }}
            xl={{ span: 6 }}
          >
            <Col
              xs={{ span: 10 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
            >
              <span className="text-sm">Deadline Date:</span>
            </Col>
            <Col
              xs={{ span: 14 }}
              md={{ span: 12 }}
              lg={{ span: 10 }}
              xl={{ span: 10 }}
            >
              <DatePicker className="min-w-[180px] min-h-[40px]" />
            </Col>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default EventDetailCard;
