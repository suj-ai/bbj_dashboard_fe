import { Table, TableColumnsType, TableProps } from "antd"
import React, { useState } from "react";

const ViewAvailability = () => {

    const [action, setAction] = useState(true);

    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
        description: React.ReactNode;
    }

    const editClickHandler = () => {
        setAction(!action)
    }

    const saveClickHandler = () => {
        setAction(!action)
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            sorter: true,
        },
        { title: 'Column 1', dataIndex: 'address', key: '1' },
        { title: 'Column 2', dataIndex: 'address', key: '2' },
        { title: 'Column 3', dataIndex: 'address', key: '3' },
        { title: 'Column 4', dataIndex: 'address', key: '4' },

        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => action ? <a onClick={editClickHandler} >edit</a> : <a onClick={saveClickHandler}>save</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
        },

    ];

    const ds = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const col = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: <Table dataSource={ds} columns={col} />,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };




    return (
        <Table columns={columns} expandable={{
            expandedRowRender: (record) =>
                <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: (record) => record.name !== 'Not Expandable',
        }} dataSource={data} onChange={onChange} scroll={{ x: 1300 }} />
    )
}

export default ViewAvailability