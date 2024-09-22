

import React, { useEffect, useState } from 'react';
import { Table, Button, Drawer, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getcategory } from '../../ReduxToolkit/categorySlice';
import dayjs from 'dayjs';

const { Column, ColumnGroup } = Table;

const AllCategory = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getcategory());  // Dispatches API call to fetch category
  }, [dispatch]);

  const categoryData = useSelector((state) => state.cat);   // Accessing data from Redux state

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Image",
      dataIndex: "image", // No render function required
      key: "image",
    },
    {
      title: "Created At",
      dataIndex: "timestamp", // No render function required
      key: "timestamp",
    }
  ];

  const data = categoryData?.data?.data?.map((val, i) => ({
    key: i,
    id: i + 1,
    name: val.name,
    status: val.status,
    image: <img src={`http://localhost:8080/api/v1/image/${val.image}`} alt={val.name} height="100px" width="100px" />,
    timestamp: dayjs(val.timeStamps).format('DD-MM-YYYY HH:mm:ss')
  }));

  return (
    <>

      {/* Button on top-right corner */}

      <Button type="primary" onClick={showDrawer} style={{ float: 'right', marginBottom: "10px" }}>
        Add
      </Button>


      {/* Drawer component with dynamic height */}
      <Drawer
        title="Category"
        placement="right"
        onClose={onClose}
        open={open}

      // Ensures full height
      >
        <Form
          name="basic"labelCol={{span: 8, }} wrapperCol={{span: 16,}}
          style={{ maxWidth: 600,}} initialValues={{  remember: true, }} autoComplete="off"
        >
          <Form.Item
            label="Add Category"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>

      

      </Drawer>

      {/* Table displaying the category data */}
      <Table dataSource={data} columns={columns} />



    </>
  );
}

export default AllCategory;
