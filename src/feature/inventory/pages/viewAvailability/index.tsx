import React, { useState } from 'react';
import { Input, Table } from 'antd';
import { TableColumnsType } from 'antd';
import { TbUvIndex } from 'react-icons/tb';
interface DataType {
  key?: React.Key;
  name?: string;
  age?: number;
  address?: string;
  description?: string;
  isEditable?: boolean;
  inputType?: any;
}

const App = () => {
  const VIEW_INVENTORY_CONSTANT: DataType[] = [
    {
      key: 1,
      name: 'Jim Green',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      inputType: <Input placeholder="Enter Description" />,
      isEditable: false,
    },
    {
      key: 2,
      name: 'Jim red',
      age: 42,
      address: 'London No. 1 Lake Park',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      inputType: <Input placeholder="Enter Description" />,
      isEditable: false,
    },
    {
      key: 3,
      name: 'Jim blue',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      description:
        'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
      inputType: <Input placeholder="Enter Description" />,
      isEditable: false,
    },
  ];
  const [userData, setUserData] = useState(VIEW_INVENTORY_CONSTANT);
  const onEditHandler = (res: any, data: any, index: any) => {
    data.isEditable = !data.isEditable;
    let ad = [...userData];
    ad[index] = data;
    console.log(data.name.editName, 'second');
    setUserData(ad);

    // console.log(VIEW_INVENTORY_CONSTANT[index]);

    // let neArr = userData.map((gh) => {
    //   console.log(res, gh, res.key === gh.key);
    //   if (gh.key === res.key) {
    //     return {
    //       ...gh,
    //       isEditable: true,
    //     };
    //   } else {
    //     return res;
    //   }
    // });
    // console.log('neArr', neArr);
    // console.log('neArr', neArr);
    // setUserData(neArr);
  };

  const onChangeHandler = (e: any, res: any, data: any, index: any) => {
    // console.log('jkj', e.target.value);
    data[e.target.name] = e.target.value;
    // data.address = e.target.value;
    // console.log(e.target.value);
    let ad = [...userData];
    ad[index] = data;
    console.log('jkj', e.target.name);
    setUserData([...ad]);
  };

  const columns: TableColumnsType = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (res, data, index) => (
        <p>
          {data.isEditable ? (
            <Input
              onChange={(e) => onChangeHandler(e, res, data, index)}
              value={data.name}
              name="name"
            />
          ) : (
            data.name
          )}
        </p>
      ),
    },
    {
      title: 'Age',
      dataIndex: '',
      key: 'age',
      render: (res, data, index) => (
        <p>
          {data.isEditable ? (
            <Input
              onChange={(e) => onChangeHandler(e, res, data, index)}
              value={data.age}
              name="age"
            />
          ) : (
            data.age
          )}
        </p>
      ),
    },
    {
      title: 'Address',
      dataIndex: '',
      key: 'address',
      render: (res, data, index) => (
        <p>
          {data.isEditable ? (
            <Input
              onChange={(e) => onChangeHandler(e, res, data, index)}
              value={data.address}
              name="address"
            />
          ) : (
            data.address
          )}
        </p>
      ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (res: any, data: any, index: any) => (
        <a onClick={() => onEditHandler(res, data, index)}>
          {res.isEditable ? 'Save' : 'Edit'}
        </a>
      ),
    },
  ];
  // console.log('sadsaas', userData);
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={userData}
      />
    </>
  );
};

export default App;
