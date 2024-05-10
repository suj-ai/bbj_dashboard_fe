import { Tabs, Row, TabsProps } from 'antd';
import { ShipAndBillDetails } from '../cards/cardDetails';

const ViewOrderNavigation = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'General',
      children: (
        <Row className="flex flex-row w-screen">
          {/* <ShipAndBillDetails /> */}
        </Row>
      ),
    },
    {
      key: '2',
      label: 'Items',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Shipping',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Fulfilment',
      children: 'Content of Tab Pane 4',
    },
    {
      key: '5',
      label: 'Discounts',
      children: 'Content of Tab Pane 5',
    },
    {
      key: '6',
      label: 'Notes',
      children: 'Content of Tab Pane 6',
    },
    {
      key: '7',
      label: 'Total(05)',
      children: 'Content of Tab Pane 7',
    },
    {
      key: '8',
      label: 'Production',
      children: 'Content of Tab Pane 8',
    },
    {
      key: '9',
      label: 'Payment',
      children: 'Content of Tab Pane 10',
    },
    {
      key: '10',
      label: 'Payment Link',
      children: 'Content of Tab Pane 11',
    },
    {
      key: '11',
      label: 'Fabrications',
      children: 'Content of Tab Pane 12',
    },
    {
      key: '12',
      label: 'Tracking',
      children: 'Content of Tab Pane 13',
    },
    {
      key: '13',
      label: 'Freight',
      children: 'Content of Tab Pane 13',
    },
  ];

  return (
    <Tabs
      className=""
      defaultActiveKey="1"
      tabBarGutter={70}
      items={items}
      onChange={onChange}
    />
  );
};

export default ViewOrderNavigation;
