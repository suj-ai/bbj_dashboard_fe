import { Button, Col, Row } from 'antd';
import { AiFillPrinter } from 'react-icons/ai';

const ViewOrderFooter = () => {
  return (
    <Row className="bg-white flex items-center  max-sm:hidden fixed bottom-4 z-10">
      <Col span={24} className='flex w-screen max-lg:w-[1%] gap-24'>

        <Col
          flex={12}
          className="flex justify-end max-lg:justify-evenly gap-4 items-center"
        >
          <Button className="flex items-center min-h-12 min-w-min">Close</Button>
          <Button
            type="primary"
            icon={<AiFillPrinter />}
            className="flex items-center min-h-12 min-w-min"
          >
            Save
          </Button>
        </Col>
        <Col flex={12} className="flex flex-start w-[35%] gap-4 items-center">
          <Button
            type="primary"
            icon={<AiFillPrinter />}
            className="flex items-center min-h-12 min-w-min"
          >
            Print
          </Button>
          <Button
            type="primary"
            icon={<AiFillPrinter />}
            className="flex items-center min-h-12 min-w-min"
          >
            Copy
          </Button>
          <Button
            type="primary"
            style={{ background: '#F23C3C' }}
            icon={<AiFillPrinter />}
            className="flex items-center min-h-12 min-w-min"
          >
            Cancel Order
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export default ViewOrderFooter;