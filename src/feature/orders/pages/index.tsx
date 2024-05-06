import {
  Button,
  Col,
  Flex,
  Input,
  Select,
  Space,
  Table,
  TableProps,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { IoPrintOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import {
  ORDERS_TABLE_CONSTANTS,
  Order,
} from "../../../constants/ordersTableConstants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a fake loading process
    const fakeLoader = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(fakeLoader); // Cleanup on unmount
  }, []);

  const columns: TableProps<Order>["columns"] = [
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      render: (text) => (
        <a onClick={() => navigate(`/orders_management/orders/${text}`)}>
          {text}
        </a>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Transaction",
      key: "transaction",
      dataIndex: "transaction",
    },
    {
      title: "Event date",
      key: "event_date",
      dataIndex: "event_date",
    },
    {
      title: "Event title",
      key: "event_title",
      dataIndex: "event_title",
    },
    {
      title: "Ship to",
      key: "ship_to",
      dataIndex: "ship_to",
    },
    {
      title: "Taken by",
      key: "taken_by",
      dataIndex: "taken_by",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <IoPrintOutline color="#2A7DBC" />
          <FiEdit color="#2A7DBC" />
        </Space>
      ),
    },
  ];

  const tableLoading = {
    spinning: loading,
    indicator: <LoadingOutlined style={{ fontSize: "40px" }} />,
  };

  return (
    <Col className="h-full">
      <Flex justify="center" className="mb-5">
        <Space direction="horizontal" size="middle" className="">
          <Space.Compact>
            <Select
              defaultValue="order"
              style={{ width: 120 }}
              //   onChange={handleChange}
              options={[
                { value: "order", label: "Order" },
                { value: "anywhere", label: "Anywhere" },
                { value: "customer", label: "Customer" },
                { value: "bill_to", label: "Bill to" },
                { value: "ship_to", label: "Ship to" },
                { value: "event", label: "Event" },
              ]}
            />
          </Space.Compact>
          <Space.Compact>
            <Input placeholder="Search" suffix={<FiSearch />} />
          </Space.Compact>
          <Space.Compact>
            <Button type="primary" icon={<IoDocumentAttachOutline />}>
              Create view
            </Button>
          </Space.Compact>
          <Space.Compact>
            <Button icon={<GoDownload />}>Download</Button>
          </Space.Compact>
        </Space>
      </Flex>
      <Col className="h-[calc(100%-100px)] overflow-x-auto">
        <Table
          loading={tableLoading}
          size="large"
          columns={columns}
          dataSource={ORDERS_TABLE_CONSTANTS}
        />
      </Col>
    </Col>
  );
};

export default Orders;
