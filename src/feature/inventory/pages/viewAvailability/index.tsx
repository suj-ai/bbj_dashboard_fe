import React, { useState } from 'react';
import { Table } from 'antd';
import { TableColumnsType } from 'antd';
interface DataType {
  key?: React.Key;
  name?: string;
  age?: number;
  address?: string;
  description?: string;
  isEditable?: boolean;
}

const App = () => {
  const VIEW_INVENTORY_CONSTANT: DataType[] = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      isEditable: false,
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      isEditable: false,
    },
    {
      key: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      description:
        'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
      isEditable: false,
    },
  ];
  const [userData, setUserData] = useState(VIEW_INVENTORY_CONSTANT);
  const onEditHandler = (res: any, idx: any, index: any) => {
    console.log(index, 'idx');
    res.isEditable = true;

    let ad = [...userData];
    ad[index] = res;
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

  const columns: TableColumnsType = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (res: any, idx: any, index: any) => (
        <a onClick={() => onEditHandler(res, idx, index)}>
          {res.isEditable ? 'Save' : 'Edit'}
        </a>
      ),
    },
  ];

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
