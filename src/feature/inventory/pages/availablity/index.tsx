import {
  Checkbox,
  Col,
  DatePicker,
  Flex,
  Input,
  Select,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { FiSearch } from "react-icons/fi";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;
interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: bigint;
  creator: string;
  createdAt: string;
  location: string;
  status: string;
  quantity: number;
  price: number;
  supplier: string;
  lastUpdated: string;
  // Additional properties
  serialNumber: string;
  category: string;
  description: string;
  warehouse: string;
  expiryDate: string;
  condition: string;
  weight: number;
  dimensions: string;
  barcode: string;
  color: string;
  manufacturer: string;
  model: string;
  productionDate: string;
  countryOfOrigin: string;
  assemblyRequired: boolean;
  warranty: string;
  customerReviews: number;
  image: string;
  productType: string;
  compatibility: string;
  material: string;
  volume: number;
  length: number;
  width: number;
  height: number;
  packageContents: string;
  installationMethod: string;
}

const Availablity = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fake loading process
    const fakeLoader = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(fakeLoader); // Cleanup on unmount
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 100,
      filters: [
        {
          text: "Screen",
          value: "screen",
        },
      ],
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
      fixed: "left",
      width: 100,
    },
    { title: "Version", dataIndex: "version", key: "version", width: 100 },
    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
      width: 150,
    },
    { title: "Creator", dataIndex: "creator", key: "creator", width: 150 },
    { title: "Date", dataIndex: "createdAt", key: "createdAt", width: 150 },
    { title: "Location", dataIndex: "location", key: "location", width: 150 },
    { title: "Status", dataIndex: "status", key: "status", width: 150 },
    { title: "Quantity", dataIndex: "quantity", key: "quantity", width: 150 },
    { title: "Price", dataIndex: "price", key: "price", width: 150 },
    { title: "Supplier", dataIndex: "supplier", key: "supplier", width: 150 },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      width: 150,
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>,
      width: 150,
    },
    // Additional random data
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width: 150,
    },
    { title: "Category", dataIndex: "category", key: "category", width: 150 },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 150,
    },
    {
      title: "Warehouse",
      dataIndex: "warehouse",
      key: "warehouse",
      width: 150,
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      key: "expiryDate",
      width: 150,
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
      width: 150,
    },
    { title: "Weight", dataIndex: "weight", key: "weight", width: 150 },
    {
      title: "Dimensions",
      dataIndex: "dimensions",
      key: "dimensions",
      width: 150,
    },
    // Additional random data
    { title: "Barcode", dataIndex: "barcode", key: "barcode", width: 150 },
    { title: "Color", dataIndex: "color", key: "color", width: 150 },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
      width: 150,
    },
    { title: "Model", dataIndex: "model", key: "model", width: 150 },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width: 150,
    },
    {
      title: "Production Date",
      dataIndex: "productionDate",
      key: "productionDate",
      width: 150,
    },
    {
      title: "Country of Origin",
      dataIndex: "countryOfOrigin",
      key: "countryOfOrigin",
      width: 150,
    },
    {
      title: "Assembly Required",
      dataIndex: "assemblyRequired",
      key: "assemblyRequired",
      width: 150,
    },
    { title: "Warranty", dataIndex: "warranty", key: "warranty", width: 150 },
    {
      title: "Customer Reviews",
      dataIndex: "customerReviews",
      key: "customerReviews",
      width: 150,
    },
    // Additional random data
    { title: "Image", dataIndex: "image", key: "image", width: 150 },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
      width: 150,
    },
    {
      title: "Compatibility",
      dataIndex: "compatibility",
      key: "compatibility",
      width: 150,
    },
    { title: "Material", dataIndex: "material", key: "material", width: 150 },
    { title: "Volume", dataIndex: "volume", key: "volume", width: 150 },
    { title: "Length", dataIndex: "length", key: "length", width: 150 },
    { title: "Width", dataIndex: "width", key: "width", width: 150 },
    { title: "Height", dataIndex: "height", key: "height", width: 150 },
    {
      title: "Package Contents",
      dataIndex: "packageContents",
      key: "packageContents",
      width: 150,
    },
    {
      title: "Installation Method",
      dataIndex: "installationMethod",
      key: "installationMethod",
      width: 150,
      fixed: "right",
    },
  ];
  const data: DataType[] = [];
  for (let i = 0; i < 10; ++i) {
    data.push({
      key: i.toString(),
      name: "Screen",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500n,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
      location: "Sample Location",
      status: "Available",
      quantity: 10,
      price: 99.99,
      supplier: "Supplier ABC",
      lastUpdated: "2023-09-30 10:00:00",
      serialNumber: "SN" + i,
      category: "Electronics",
      description: "High-resolution screen",
      warehouse: "Warehouse A",
      expiryDate: "2025-12-31",
      condition: "New",
      weight: 2.5,
      dimensions: "20x15x5",
      barcode: "1234567890",
      color: "Black",
      manufacturer: "Manufacturer XYZ",
      model: "Model ABC",
      productionDate: "2023-01-15",
      countryOfOrigin: "USA",
      assemblyRequired: false,
      warranty: "1 year",
      customerReviews: 4.5,
      image: "image-url",
      productType: "Monitor",
      compatibility: "iOS, Android",
      material: "Plastic",
      volume: 5000,
      length: 20,
      width: 15,
      height: 5,
      packageContents: "Monitor, Power Cable",
      installationMethod: "Wall mount",
    });
  }

  const tableLoading = {
    spinning: loading,
    indicator: <LoadingOutlined style={{ fontSize: "40px" }} />,
  };

  const expandedRowRender = () => {
    return (
      <Table
        expandable={{
          expandedRowRender: () => (
            <Table
              scroll={{ x: 1500 }}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          ),
          defaultExpandedRowKeys: ["0"],
        }}
        scroll={{ x: 1500 }}
        columns={columns}
        dataSource={data}
      />
    );
  };

  return (
    <Col className=" h-full">
      <Flex justify="center" align="center">
        <Space direction="horizontal" size="middle" className="mb-5">
          <Space.Compact>
            <Input placeholder="Search" suffix={<FiSearch />} />
          </Space.Compact>
          <Space.Compact>
            <RangePicker />
          </Space.Compact>
          <Space.Compact>
            <Select
              placeholder="Facility"
              style={{ width: 180 }}
              //   onChange={handleChange}
              options={[
                { value: "niles_laundry", label: "Niles Laundry" },
                { value: "napa_laundry", label: "Napa Laundry" },
                { value: "milwakee_warehouse", label: "Milwakee Warehouse" },
                { value: "orlando_warehouse", label: "Orlando Warehouse" },
              ]}
            />
          </Space.Compact>
          <Space.Compact>
            <Checkbox>Quotes</Checkbox>
          </Space.Compact>
          <Space.Compact>
            <Checkbox>Obsolete</Checkbox>
          </Space.Compact>
        </Space>
      </Flex>
      <Col className="h-[calc(100%-100px)] overflow-y-scroll">
        <Table
          loading={tableLoading}
          scroll={{ x: 1500 }}
          columns={columns}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
          dataSource={data}
        />
      </Col>
    </Col>
  );
};

export default Availablity;
